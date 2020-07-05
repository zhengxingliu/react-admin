import React, { Component } from 'react'
import { Card, Button, List, Avatar, Badge} from 'antd'
import { MoreOutlined, CheckCircleOutlined} from '@ant-design/icons'

export default class Notifications extends Component {

  data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ]

  render() {
    return (
      <Card
      title='Notifications'
      bordered={false}
      extra={<Button>Mark all as read</Button>}
      >

      <List
          itemLayout="horizontal"
          dataSource={this.data}
          renderItem={item => (
            <List.Item 
              actions={[
                <Button ><MoreOutlined /></Button>,
                <Button ><CheckCircleOutlined /></Button>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{<Badge dot offset={[-124,2]}>{item.title}</Badge>}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
      />

      </Card>
    )
  }
}
