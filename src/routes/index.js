import { DashboardOutlined, FileTextOutlined, SettingOutlined} from "@ant-design/icons"

import {
  Dashboard, 
  Login, 
  NotFound, 
  Settings,
  ArticleList,
  ArticleEdit
} from '../views'


export const mainRoutes =  [{
  pathname: '/login',
  component: Login
},{
  pathname: '/404',
  component: NotFound
}]


export const adminRoutes = [{
  pathname: '/admin/dashboard',
  component: Dashboard,
  title: 'Dashboard',
  isNav: true,
  icon: DashboardOutlined
},{
  pathname: '/admin/article',
  component: ArticleList,
  exact: true,
  title: 'Article List',
  isNav: true,
  icon: FileTextOutlined
},{
  pathname: '/admin/article/edit/:id',
  component: ArticleEdit
},{
  pathname: '/admin/settings',
  component: Settings,
  title: 'Settings',
  isNav: true,
  icon: SettingOutlined
}]