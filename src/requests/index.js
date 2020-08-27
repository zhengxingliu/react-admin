import axios from 'axios'
import { message } from 'antd'

const isDev = process.env.NODE_ENV === 'development'


const request = axios.create({
  baseURL: isDev? 'http://rap2.taobao.org:38080/app/mock/259142' : 'http://rap2.taobao.org:38080/app/mock/259142'
  // baseURL: isDev? 'http://localhost:8080' : ''
  // headers: {
  //   'Content-Type': 'application/json',
  // },
})

// no interceptor version
const request1 = axios.create({
  baseURL: isDev? 'http://rap2.taobao.org:38080/app/mock/259142' : 'http://rap2.taobao.org:38080/app/mock/259142'
})


request.interceptors.request.use((config) => {
  // pass in request body params 
  config.data = {
    ...config.data,
    // 'authToken' : window.localStorage.getItem('authToken')
    authToken: 'Bearer-tokenplaceholder'
  }
  return config
})

request.interceptors.response.use((resp) => {
  if (parseInt(resp.data.code) === 200 && resp.data.errMsg === '') {
    return resp.data
  } else {
    // handle error globally 
    // message.error(resp.data.errMsg);
    message.error('An error occurred.')
  }
})

export const getArticleList = (offset=0, limited=10) => {
  return request.post('/api/v1/articlelist', 
  {
    //body params
    offset,
    limited,
  })
}

export const deleteArticle = (id) => {
  return request.delete(`/api/v1/article/${id}`)
}

export const getArticleById = (id) => {
  return request.post(`/api/v1/article/:${id}`)
}

export const saveEditArticle = (id, data) => {
  return request.put(`/api/v1/article/:${id}`, data)

}

export const getSiteVisitStatistics = () => {
  return request.post('/api/v1/statistics/visits')
}

export const getNotifications = () => {
  return request.post('/api/v1/notifications')
}

export const loginRequest = (userInfo) => {
  return request1.post('/api/v1/login', userInfo)
}