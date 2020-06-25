import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"


import { adminRoutes } from "./routes"

import { SideNav } from "./components"

class App extends Component {
  render() {
    return (
      <SideNav>


        <Switch>
          {adminRoutes.map((route) => {
            return (
              <Route
                key={route.pathname}
                path={route.pathname}
                exact={route.exact}
                render={(routerProps) => {
                  return <route.component {...routerProps} />
                }}
              />
            )
          })}
          {/* redirect to dashboard */}
          <Redirect to={adminRoutes[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </SideNav>
   
    )
  }
}

export default App
