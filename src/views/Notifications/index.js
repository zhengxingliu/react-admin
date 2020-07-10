import React, { Component } from 'react'

import { Card, Button, List, Avatar, Badge, Tooltip, Spin} from 'antd'
import { MailTwoTone, CheckOutlined} from '@ant-design/icons'

import { connect } from 'react-redux'
import { 
  markNotificationAsReadById,
  markNotificationAsUnReadById,
  markAllNotificationsAsRead,
} from '../../actions/notifications'

const mapState = state => {
  const { list, isLoading } = state.notifications
  return {
    list,
    isLoading
  }
}

@connect(mapState, {markNotificationAsReadById, markNotificationAsUnReadById, markAllNotificationsAsRead})
class Notifications extends Component {
  render() {
    return (
      <Spin spinning={this.props.isLoading}>
        <Card
        title='Notifications'
        bordered={false}
        extra={
          <Button 
            onClick={this.props.markAllNotificationsAsRead}
            disabled={this.props.list.every(item => item.hasRead === true)}>
            Mark all as read
          </Button>
        }
        >

        <List
            itemLayout="horizontal"
            dataSource={this.props.list}
            renderItem={item => (
              <List.Item
                style={{display: 'flex', justifyContent: 'center'}}
                actions={[
                
                  item.hasRead 
                  ? <Tooltip title='click to mark as unread' 
                      color={'rgba(0, 0, 0, 0.3)'} overlayStyle={{fontSize: '10px', height: '35px'}} mouseEnterDelay={0.5} 
                    >
                      <Button 
                        onClick={this.props.markNotificationAsUnReadById.bind(this, item.id)} 
                        loading={item.isLoading}
                        icon={<CheckOutlined />}
                      />
                    </Tooltip>
                  : < Tooltip title='click to mark as read' 
                      color={'rgba(0, 0, 0, 0.3)'} overlayStyle={{fontSize: '10px', height: '35px'}} mouseEnterDelay={0.5}
                    >
                      <Button 
                        onClick={this.props.markNotificationAsReadById.bind(this, item.id)} 
                        loading={item.isLoading}
                        icon={<MailTwoTone />}
                      />
                    </Tooltip>
                ]}
              >
                <List.Item.Meta
                  style={{flex: '1 1 auto' }}

                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="/admin/notifications">{<Badge dot={!item.hasRead} offset={[4, 0]} >{item.title}</Badge>}</a>}
                  description={item.desc}
                />
              </List.Item>
            )}
        />

        </Card>
      </Spin>
    )
  }
}

export default Notifications