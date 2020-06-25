import React, { Component } from 'react'
import { Card, Button, Table, Spin, Tag } from 'antd'
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
      isLoading: true
    }
  }


  

  componentDidMount() {

    getArticleList()
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
          columns: [
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
            }
          ],
          isLoading: false
        })
      })  
      
  }

  render() {
    return (
      <div>
        <Card 
          title='Article List' 
          bordered={false} 
          extra={<Button>Export to Excel</Button>}
        >
  
          <Spin spinning={this.state.isLoading} size={'large'}>
            <Table 
              columns={this.state.columns} 
              dataSource={this.state.data} 
              pagination={{
                hideOnSinglePage: true,
                total: this.state.total
              }}
            />
          </Spin>

        </Card>
        
      </div>
    )
  }
}
