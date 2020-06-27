import React, { Component } from 'react'
import { Card, Button, Table, Tag } from 'antd'
import moment from 'moment'

import { getArticleList} from '../../requests'

// window.moment = moment

export default class ArticleList extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      columns: [],
      total: 0,
      isLoading: false,
      offet: 0,
      limited: 10,
    }
  }


  getColumns = () => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: text => <a herf='#'>{text}</a>
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'Reads',
        dataIndex: 'reads',
        key: 'reads',
        render: text => (
          parseInt(text) > 5000 
          ?  <Tag color='red'>{text}</Tag>
          : <Tag>{text}</Tag>
        )
      },
      {
        title: 'Created At',
        dataIndex: 'createAt',
        key: 'createAt'
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <Button.Group>
            <Button >Edit</Button>
            <Button >Delete</Button>
          </Button.Group>
        )
      }
    ]

  }

  getData = () => {
    this.setState({isLoading: true})
    getArticleList(this.state.offset, this.state.limited)
      .then(res => {
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
          columns: this.getColumns()
        })
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
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

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div>
        <Card 
          title='Article List' 
          bordered={false} 
          extra={<Button>Export to Excel</Button>}
        >
          <Table 
            loading={this.state.isLoading}
            columns={this.state.columns} 
            dataSource={this.state.data} 
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
