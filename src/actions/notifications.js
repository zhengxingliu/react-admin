import actionTypes from './actionTypes'
import { getNotifications } from '../requests'

export const startUpdatingNotificationState = (id) => {
  return {
    type: actionTypes.START_UPDATING_NOTICIFATION_STATE,
    payload: {
      id
    }
  }
}

export const finishUpdatingNotificationState = (id) => {
  return {
    type: actionTypes.FINISH_UPDATING_NOTIFICATION_STATE,
    payload: {
      id
    }
  }
}

export const markNotificationAsReadById = (id) => {
  //dispatch for async requests, mock with setTimeout 
  return dispatch => {
    dispatch(startUpdatingNotificationState(id))
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID,
        payload: {
          id
        }
      })
      dispatch(finishUpdatingNotificationState(id))
    }, 500)
  }
}

export const markNotificationAsUnReadById = (id) => {
  //dispatch for async requests, mock with setTimeout 
  return dispatch => {
    dispatch(startUpdatingNotificationState(id))
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_NOTIFICATION_AS_UNREAD_BY_ID,
        payload: {
          id
        }
      })
      dispatch(finishUpdatingNotificationState(id))
    }, 500)
  }
}

export const markAllNotificationsAsRead = () => dispatch => {
  //dispatch for async requests, mock with setTimeout 
  dispatch(startUpdatingNotificationState())
  setTimeout(() => {
    dispatch({
      type: actionTypes.MARK_ALL_NOTIFICATIONS_AS_READ
    })
    dispatch(finishUpdatingNotificationState())
  }, 500)
}

export const getNotificationList = () => dispatch => {
  dispatch({
    type: actionTypes.FETCH_NOTIFICATIONS
  })
  getNotifications()
    .then(res => {
      console.log(res)
      dispatch({
        type: actionTypes.RECEVIED_NOTIFICATIONS,
        payload: {
          list:  res.data.list
        } 
      })
    })
    .catch(err => {
      console.log(err)
    })
}