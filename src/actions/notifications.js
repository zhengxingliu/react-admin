import actionTypes from './actionTypes'

export const startUpdatingNotificationState = () => {
  return {
    type: actionTypes.START_UPDATING_NOTICIFATION_STATE,
  }
}

export const finishUpdatingNotificationState = () => {
  return {
    type: actionTypes.FINISH_UPDATING_NOTIFICATION_STATE,
  }
}

export const markNotificationAsReadById = (id) => {
  //dispatch for async requests, mock with setTimeout 
  return dispatch => {
    dispatch(startUpdatingNotificationState())
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID,
        payload: {
          id
        }
      })
      dispatch(finishUpdatingNotificationState())
    }, 500)
  }
}

export const markNotificationAsUnReadById = (id) => {
  //dispatch for async requests, mock with setTimeout 
  return dispatch => {
    dispatch(startUpdatingNotificationState())
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_NOTIFICATION_AS_UNREAD_BY_ID,
        payload: {
          id
        }
      })
      dispatch(finishUpdatingNotificationState())
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

