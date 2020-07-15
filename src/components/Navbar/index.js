import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import { Layout, Menu, Dropdown, Avatar, Badge } from "antd"
import { DownOutlined,  UserOutlined  } from '@ant-design/icons'
import { connect } from 'react-redux'

import { getNotificationList } from '../../actions/notifications'
import { logout } from '../../actions/user'

import "./navbar.less"
// import logo from "./logo.png"
import logo from "./AdminLogo.png"
import { adminRoutes } from "../../routes"
import { Footer } from ".."


const { Header, Content, Sider } = Layout

const mapState = state => {
  return {
    notificationCount: state.notifications.list.filter(item => item.hasRead === false).length,
    avatar: state.user.avatar,
    displayName: state.user.displayName
  }
}

@connect(mapState, {getNotificationList, logout})
@withRouter
class SideNav extends Component {
  componentDidMount() {
    this.props.getNotificationList()
  }
  onDropMenuClick = ({key}) => {
    if (key == '/logout') {
      this.props.logout()
    } else {
      this.props.history.push(key)
    }
  }

  renderMenu = () => (
      <Menu onClick={this.onDropMenuClick}>
        <Menu.Item key='/admin/notifications'>
          <Badge dot={this.props.notificationCount}>
            Notification
          </Badge>
        </Menu.Item>
        <Menu.Item key='/admin/settings'>
          Account Setting
        </Menu.Item>
        <Menu.Item key='/logout'>
          Log Out
        </Menu.Item>
    </Menu>
  )

 

  render() {
    // let breadcrumbs = this.props.location.pathname.split("/")
    // breadcrumbs = breadcrumbs.filter((item) => item !== "")
     
    const menus = adminRoutes.filter((route) => route.isNav === true)

    return (
      <Layout style={{ height: "100%"}}>
        <Header className="header main-header">
          <div className="logo main-logo">
            <a href='/'>
              <img src={logo} alt="react-admin" />
              <h1> React Admin</h1>
            </a>
          </div>
          <div>
         
          <Dropdown overlay={this.renderMenu()}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Badge count={this.props.notificationCount} >
                <Avatar src={this.props.avatar} /> 
              </Badge>
                <span style={{padding: '0 4px 0 4px'}}>Hello, {this.props.displayName}</span>
              <DownOutlined />    
            </div>
          </Dropdown>
        
          
          </div>

        </Header>
        <Layout>
          <Sider breakpoint="lg" collapsedWidth="0" style={{zIndex: 100}}>
            <Menu 
              onClick={this.menuClicked}
              mode="inline"
              defaultSelectedKeys={menus[0].pathname}
              selectedKeys={this.props.location.pathname}
              defaultOpenKeys={menus[0].pathname}
              style={{ height: "100%", borderRight: 0 }}
            >
              {menus.map((menu) => {
                return (
                  <Menu.Item key={menu.pathname} icon={<menu.icon />}>
                    <Link to={menu.pathname}> {menu.title}</Link>
                  </Menu.Item>
                )
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "24px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              {breadcrumbs.map((item) => {
                return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
              })}
            </Breadcrumb> */}

            <Content
              className="site-layout-background"
              style={{
                // padding: 24,
                margin: 0,
                // minHeight: 280,
                backgroundColor: "#FFF"
              }}
            >
              {this.props.children}
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default SideNav
