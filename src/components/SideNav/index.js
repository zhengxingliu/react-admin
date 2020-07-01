import React, { Component } from "react"
import { Layout, Menu } from "antd"
import { Link, withRouter } from "react-router-dom"

import "./sideNav.less"
import logo from "./logo.png"
import { adminRoutes } from "../../routes"
import { Footer } from "../../components"

const { Header, Content, Sider } = Layout

@withRouter
class SideNav extends Component {
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
              <h1>React Admin</h1>
            </a>
          </div>
        </Header>
        <Layout>
          <Sider breakpoint="xl" collapsedWidth="0">
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
