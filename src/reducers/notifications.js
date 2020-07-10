import actionTypes from '../actions/actionTypes'

const initState = {
  list: [
    // {
    //   id: 1,
    //   title: 'eum et est occaecati',
    //   desc: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    //   hasRead: false,
    //   isLoading: false
    // },{
    //   id: 2,
    //   title: 'quo vero reiciendis velit similique earum',
    //   desc: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    //   hasRead: false,
    //   isLoading: false
    // }
  ],
  isLoading: false
}

export default (state=initState, action) => {
  switch(action.type){
    case actionTypes.START_UPDATING_NOTICIFATION_STATE:
        return {
          ...state,
          list: state.list.map(item => {
            if (action.payload.id) {
              if (item.id === action.payload.id) item.isLoading = true
            } else {
              if (item.hasRead === false) item.isLoading = true
            }
            return item
          })
        }

    case actionTypes.FINISH_UPDATING_NOTIFICATION_STATE:
      return {
        ...state,
        list: state.list.map(item => {
          if (action.payload.id) {
            if (item.id === action.payload.id) item.isLoading = false
          } else {
            if (item.hasRead === true) item.isLoading = false
          }
          return item
        })
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

    case actionTypes.RECEVIED_NOTIFICATIONS:
      return {
        ...state,
        list: action.payload.list,
        isLoading: false
      }
    
    case actionTypes.FETCH_NOTIFICATIONS:
      return {
        ...state,
        isLoading: true,
      }

    default: return state
  }
}