import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { Button  } from 'antd'

import { adminRouter } from './routes'

class App extends Component {
  render() {
    return (
      <div>
        App

        <Switch>
          {
            adminRouter.map(route => {
              return (
                <Route 
                  key={route.pathname} 
                  path={route.pathname} 
                  exact={route.exact}
                  render={(routerProps) => {
                    return <route.component {...routerProps} />
                }} />
              )
            })
          }
          {/* redirect to dashboard */}
          <Redirect to={adminRouter[0].pathname} from='/admin' exact  />
          <Redirect to='/404'/>
        </Switch>
        
        <Button>button</Button>
        <Link to='/admin/article'><Button>article</Button></Link>
        <Link to='/admin/settings'><Button>settings</Button></Link>
      </div>
    )
  }
}




export default App