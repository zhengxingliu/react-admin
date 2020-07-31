import { DashboardOutlined, FileTextOutlined, SettingOutlined} from "@ant-design/icons"

import {
  Dashboard, 
  Login, 
  NotFound, 
  Settings,
  Notifications,
  ArticleList,
  ArticleEdit,
  NoAuth,
  Profile
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
  icon: DashboardOutlined,
  role: ['001', '002', '003']
  /* 
  authorization role which has access to different levels of pages
  001: super admin
  002: regular admin
  003: basic user
  */

},{
  pathname: '/admin/article',
  component: ArticleList,
  exact: true,
  title: 'Article List',
  isNav: true,
  icon: FileTextOutlined,
  role: ['001', '002', '003']

},{
  pathname: '/admin/article/edit/:id',
  component: ArticleEdit,
  role: ['001', '002']
},{
  pathname: '/admin/settings',
  component: Settings,
  title: 'Settings',
  isNav: true,
  icon: SettingOutlined,
  role: ['001']
},{
  pathname: '/admin/notifications',
  component: Notifications,
  title: 'Notifications',
  role: ['001', '002', '003']
},{
  pathname: '/admin/profile',
  component: Profile,
  role: ['001', '002', '003']
},{
  pathname: '/admin/no-auth',
  component: NoAuth,
  role: ['001', '002', '003']
}]