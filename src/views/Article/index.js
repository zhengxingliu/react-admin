import React, { Component } from 'react'
import { Card, Button, Table, Tag, Modal, Typography, message, Tooltip} from 'antd'
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons'
import moment from 'moment'
import XLSX from 'xlsx'


import { getArticleList, deleteArticle} from '../../requests'


export default class ArticleList extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      columns: [],
      total: 0,
      isLoading: false,
      offset: 0,
      limited: 10,
    }
  }


  getTableColumns = () => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text, record) => (
          <Typography onClick={this.onEdit.bind(this, record)} style={{color: '#58aaff', cursor: 'pointer'}} >{text}</Typography>
        )
      },
     
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        responsive: ['md']
      },
      {
        title: 'Reads',
        dataIndex: 'reads',
        key: 'reads',
        render: text => (
          parseInt(text) > 5000 
          ?  <Tooltip title="popular article" color='rgba(13, 13, 13, 0.7)'><Tag color='red'>{text}</Tag></Tooltip>
          : <Tag>{text}</Tag>
        ), 
      },
      {
        title: 'Created At',
        dataIndex: 'createAt',
        key: 'createAt',
        responsive:  ['md']
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Button.Group>
            <Button onClick={this.onEdit.bind(this, record)}><EditOutlined /></Button>
            <Button onClick={this.deleteArticle.bind(this, record, this.getData)}><DeleteOutlined /></Button>
          </Button.Group>
        )
      }
    ]

  }

  getData = () => {
    this.setState({isLoading: true})
    getArticleList(this.state.offset, this.state.limited)
      .then(res => {
        // prevent setState on unmounted component
        if (!this.updater.isMounted(this)) return 

        this.setState({
          total: res.data.total,
          data: res.data.list.map(item => {
            return {
              ...item,
              key: item.id,
              // createAt: new Date(item.createAt).toLocaleDateString()
              createAt: moment(item.createAt).format('L')
            }
          }),
          columns: this.getTableColumns()
        })
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        if (!this.updater.isMounted(this)) return 
        this.setState({isLoading: false})
      })
  }

  onPageChange = (page, pageSize) => {  
    this.setState({
      offset: pageSize * (page - 1) , 
      limited: pageSize
    }, () => {
      this.getData()
    })
  }
  onPageSizeChange = (current, size) => {
    this.setState({
      offset: 0,
      limited: size,
      }, () => {
      this.getData()
    })   
  }

  onEdit = (record) => {
    this.props.history.push({
      pathname: `/admin/article/edit/${record.id}`,
      state: { title : record.title }
    })
  }

  deleteArticle = (record, getData) => {
    Modal.confirm({
      title: 
        <Typography>Are you sure you want to delete 
          <Typography style={{color: '#fbad13'}}>{record.title}<span style={{color: '#626262'}}> ?</span>
          </Typography> 
        </Typography>,
      content: 'This action is irreversible.',
      okType: 'danger',
      okText: 'Delete',
      maskClosable: true,
      onOk() {
        //async promise confirm
        return deleteArticle(record.id)
          .then(res => {
            if (res.code === 200) {
              message.success('Article deleted.')
              getData()
            }
          })
          .catch(err => {
            Modal.error({
              content: 'Unable to delete article. Please try again.',
            })
          })
        
      },
      onCancel() {},
    });
  }

  toExcel = () => {
    // should be processed by backend
    // send ajax request to backend, return download link

    const data = [Object.keys(this.state.data[0]).slice(0,-1)]
    this.state.data.forEach(item => {
      data.push(Object.values(item).slice(0,-1))
    })

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "ArticleList");
    XLSX.writeFile(wb, `articles-${this.state.offset/this.state.limited+1}-${moment().format('YYYYMMDDHHmmss')}.xlsx`)
  }

  componentDidMount() {
    this.getData()
  }

  // componentWillMount () {
  //   // xhr.abort()
  //   console.log('componentWillMount')
  // }

  render() {
    return (
      <div>
        <Card 
          title='Article List' 
          bordered={false} 
          extra={<Button onClick={this.toExcel}>Export to Excel</Button>}
        >
          <Table 
            loading={this.state.isLoading}
            columns={this.state.columns} 
            dataSource={this.state.data} 
            size='small'
            pagination={{
              onChange: this.onPageChange,
              onShowSizeChange: this.onPageSizeChange,
              hideOnSinglePage: true,
              total: this.state.total,
              showQuickJumper: true,
              showSizeChanger: true
            }}
          />
        </Card> 
      </div>
    )
  }
}
