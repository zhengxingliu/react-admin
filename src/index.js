import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'


import App from './App'
import './index.less'

import store from './store'

import { mainRoutes } from './routes'


render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/admin' render={(routerProps) => {
          return <App  {...routerProps} /> 
        }} />
        <Redirect to='/admin' from='/' exact/>
      {
        mainRoutes.map(route => {
          return <Route key={route.pathname} path={route.pathname} component={route.component} />
        })
      }
        {/* <Redirect to='/404'/> */}
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#root')
  
) 