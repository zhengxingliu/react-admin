import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Card, Col, Row, Menu, Spin, notification} from 'antd'
import { UserOutlined, LockOutlined, SmileOutlined} from '@ant-design/icons'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions/user'

const wrapperCol = {
  span: 4,
  offset: 10
}

const mapState = state => ({
  isLogin: state.user.isLogin,
  isLoading: state.user.isLoading
})

@connect(mapState, {login})
class Login extends Component {
  submitLogin = (userInfo) => {
    this.props.login(userInfo)
    // this.mixedContentWarning()
  }

  // Enable mixed content in browser for hosting on Github page, ajax is blocked from https (github) to http (rap2)
  // TODO: fix mixed content error
  mixedContentWarning = () => {
    notification['warning']({
      message: 'Mixed Content Request',
      description: 
        'If login is not redirecting, enable mixed content in your browser. The mock api server is using http instead of https, allow insure content in browser settting.',
      // icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      duration: 0,
      key: 'login-message'
    })
  }

  openNotification = () => {
    notification.open({
      message: 'Hello',
      description: 
        'This is a demo for a company admin website frontend, login with any mock username and password.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      duration: 0,
      key: 'login-message'
    })
    
  }

  componentDidMount() {
    this.openNotification()
  }

  componentWillUnmount() {
    notification.close('login-message')
  }
  render() {
    return (
      this.props.isLogin 
      ?
      <Redirect to='/admin' />
      :
      <Spin spinning={this.props.isLoading}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <h2>React Admin</h2>
          </Menu.Item>
        </Menu>

        <Row justify="center" className='login-wrapper' style={{paddingTop: '5%'}} >
          <Col xs={20} sm={16} md={12} lg={8}>
            <Card title='Login'>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.submitLogin}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username' }]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password' }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  {/* <a className="login-form-forgot" href="">
                    Forgot password
                  </a> */}
                </Form.Item>
                <Form.Item  wrapperCol={wrapperCol}>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                  {/* Or <a href="">register now!</a> */}
                </Form.Item>
              

              
              </Form>
            </Card>
          </Col>
        </Row>
      </Spin>
     
    )
  }
}
export default Login