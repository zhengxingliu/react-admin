import actionTypes from './actionTypes'
import { loginRequest } from '../requests'

const startLogin  =  () => {
  return {
    type: actionTypes.START_LOGIN,
  }
}

const loginSuccess  =  (userInfo) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {userInfo}
  }
}

const loginFailed  =  () => {
  window.localStorage.removeItem('authToken')
  window.sessionStorage.removeItem('authToken')
  window.localStorage.removeItem('userInfo')
  window.sessionStorage.removeItem('userInfo')
  return {
    type: actionTypes.LOGIN_FAILED,
  }
}

export const login = (userInfo) => dispatch => {
  dispatch(startLogin())
  const remember = userInfo.remember
  loginRequest(userInfo)
    .then(res => {
      if (res.status === 200) {
        //store authentication
        const {authToken, ...userInfo} = res.data.data
        if (remember === true) {
          window.localStorage.setItem('authToken', authToken)
          window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
        } else {
          window.sessionStorage.setItem('authToken', authToken)
          window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
        }
        dispatch(loginSuccess(res.data.data))
      } else {
        dispatch(loginFailed())
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const logout = () => dispatch => {
  //TODO: notify backend server about logout 
  dispatch(loginFailed())
}

export const change_avator = (avatarUrl) => {
  return {
    type: actionTypes.CHANGE_AVATAR,
    payload: {
      avatarUrl
    }
  }
}