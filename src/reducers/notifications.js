import actionTypes from '../actions/actionTypes'

const initState = {
  isLoading: false,
  list: [{
      id: 1,
      title: 'eum et est occaecati',
      desc: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
      hasRead: false,
    },{
      id: 2,
      title: 'quo vero reiciendis velit similique earum',
      desc: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
      hasRead: false
    }
  ]
}

export default (state=initState, action) => {
  switch(action.type){
    case actionTypes.START_UPDATING_NOTICIFATION_STATE:
      return {
        ...state,
        isLoading: true
      }

    case actionTypes.FINISH_UPDATING_NOTIFICATION_STATE:
      return {
        ...state,
        isLoading: false
      }

    case actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload.id ) {
            item.hasRead = true
          } 
          return item  
        })
      }

    case actionTypes.MARK_NOTIFICATION_AS_UNREAD_BY_ID:
      return {
        ...state, 
        list: state.list.map(item => {
          if (item.id === action.payload.id) {
            item.hasRead = false
          }
          return item
        })
      }

    case actionTypes.MARK_ALL_NOTIFICATIONS_AS_READ:
      return {
        ...state,
        list: state.list.map(item => {
          item.hasRead = true
          return item
        })
      }

    default: return state
  }
}