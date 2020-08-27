import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from 'react-redux'

import { adminRoutes } from "./routes"

import { Navbar } from "./components"

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
  role: state.user.role
})


@connect(mapStateToProps)
class App extends Component {

  render() {
    return (
    
      this.props.isLogin 
      ?
      <Navbar>
        <Switch>
          {adminRoutes.map((route) => {
            return (
              <Route
                key={route.pathname}
                path={route.pathname}
                exact={route.exact}
                render={(routerProps) => {
                  const hasPermission = route.role.includes(this.props.role)
                  return hasPermission ? <route.component {...routerProps} /> : <Redirect to='/admin/no-auth'/>
                }}
              />
            )
          })}
          {/* redirect to dashboard */}
          <Redirect to={adminRoutes[0].pathname} from="/admin" exact />
          {/* <Redirect to="/404" /> */}
        </Switch>
      </Navbar>
      : <Redirect to='/login'/>
    )
  }
}

export default App
