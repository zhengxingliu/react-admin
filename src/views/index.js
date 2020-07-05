/*  
-Login
-404
-admin
  -dashboard
  -article
    -List
    -edit
  -setting
*/

import React from "react"
// import Loadable from 'react-loadable'
import loadable from '@loadable/component'
// import pMinDelay from 'p-min-delay'

import { Loading } from '../components'

// import Dashboard from './Dashboard'
// import Login from './Login'
// import NotFound from './NotFound'
// import Settings from './Settings'
// import ArticleList from './Article/index'
// import ArticleEdit from './Article/edit'


// const Dashboard = loadable(() => 
//   pMinDelay(
//     import('./Dashboard'), {fallback:  <Loading/>},
//     200
// ))

const Dashboard = loadable(() => import('./Dashboard'), {
  fallback:  <Loading/>
})

const Login = loadable(() => import('./Login'), {
  fallback:  <Loading/>
})

const NotFound = loadable(() => import('./NotFound'), {
  fallback:  <Loading/>
})

const Settings = loadable(() => import('./Settings'), {
  fallback: <Loading/>
})

const Notifications = loadable(() => import('./Notifications'), {
  fallback: <Loading/>
})

const ArticleList = loadable(() => import('./Article/index'), {
  fallback:  <Loading/>
})

const ArticleEdit = loadable(() => import('./Article/Edit'), {
  fallback:  <Loading/>
})

// old config with react-loadable

// const Dashboard = Loadable({
//   loader: () => import('./Dashboard'),
//   loading: Loading
// })


export {
  Dashboard, 
  Login, 
  NotFound, 
  Settings,
  Notifications,
  ArticleList,
  ArticleEdit,
} 