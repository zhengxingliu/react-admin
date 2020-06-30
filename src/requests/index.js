import axios from 'axios'
import { message } from 'antd'

const isDev = process.env.NODE_ENV === 'development'


const ajax = axios.create({
  baseURL: isDev? 'http://rap2.taobao.org:38080/app/mock/259142' : ''
})

ajax.interceptors.request.use((config) => {

  // pass in request body params 
  config.data = {
    ...config.data,
    // 'authToken' : window.localStorage.getItem('authToken')
    authToken: 'Bearer-tokenplaceholder'
  }
  return config
})

ajax.interceptors.response.use((resp) => {
  if (resp.data.code === 200 && resp.data.errMsg === '') {
    return resp.data
  } else {
    // handle error globally 
    // message.error(resp.data.errMsg);
    message.error('An error occurred.')
  }
})

export const getArticleList = (offset=0, limited=10) => {
  return ajax.post('/api/v1/articlelist', {
    //body params
    offset,
    limited
  })
}

export const deleteArticle = (id) => {
  return ajax.delete(`/api/v1/article/${id}`)
}