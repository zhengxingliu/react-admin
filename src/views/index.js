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

import Loadable from 'react-loadable'

import { Loading } from '../components'

import Dashboard from './Dashboard'
import Login from './Login'
import NotFound from './NotFound'
import Settings from './Settings'
import ArticleList from './Article/index'
import ArticleEdit from './Article/edit'

// const Dashboard = Loadable({
//   loader: () => import('./Dashboard'),
//   loading: Loading
// })

// const Login = Loadable({
//   loader: () => import('./Login'),
//   loading: Loading
// })



export {
  Dashboard, 
  Login, 
  NotFound, 
  Settings,
  ArticleList,
  ArticleEdit
} 