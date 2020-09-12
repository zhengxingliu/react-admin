import React, { Component } from 'react'
import { Upload, Card, Button, Space, Spin, message} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'
import { connect } from 'react-redux'

import { change_avator } from '../../actions/user'

const mapStates = state => ({
  avatarUrl: state.user.avatar
})

@connect(mapStates, { change_avator })
 class Profile extends Component {

  state = {
    isUploading: false
  }

  handleUpload = ({ file }) => {
    this.setState({
      isUploading: true
    })
    const data = new FormData()
    data.append('image', file)
    axios.post('https://api.imgbb.com/1/upload?expiration=600&key=28d25fb724f13c2c82732d5cee60706e', data)
    .then(res => {
      if (res.data.status === 200) {

        this.props.change_avator(res.data.data.thumb.url)

        this.setState({
          isUploading: false
        })
      } 
    })
    .catch(err => {
      console.log(err)

      this.setState({
        isUploading: false
      })
      message.error('Failed to upload')

    })
  }
  
  render() {

    return (
      <Card 
        title='Account Setting'
        bordered={false}
      >
        Edit Profile Picture <Space></Space>

        <Upload 
         customRequest={this.handleUpload}
         showUploadList={false}
         >
          <Spin spinning={this.state.isUploading}>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Spin>
        </Upload>

        <Card bordered={false}>
          <img src={this.props.avatarUrl} alt='profile' style={{height: 80, width: 80}}></img>
        </Card>
      </Card>
    )
  }
}

export default Profile