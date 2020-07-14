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
  return {
    type: actionTypes.LOGIN_FAILED,
  }
}

export const login = (userInfo) => dispatch => {
  dispatch(startLogin())
  loginRequest(userInfo)
    .then(res => {
      if (res.status === 200) {
        dispatch(loginSuccess({
          ... res.data.data,
          remember: userInfo.rember
        }))
      } else {
        dispatch(loginFailed())
      }
    })
    .catch(err => {
      console.log(err)
    })
}