1. set **react-app-rewired** and **customize-cra**

2. change *package.json* and *config-overrides.js*

3. set **less** and **less-loader**

4. set **antd** in *config-overrides* and theme less variables file

   * *in new verision should use craco and craco-antd*

5. set decorator in cra-decorator with *addDecoratorLegacy* and setup HOC

6. set up folder

   * components, views, routes
   * reducers, actions, store

7. set up react-router-dom 

   * creating folder in views and export them 
   * import into routes and set up pathname
   * set up router, route, switch
   * lazy load routes using **react-loadable**

8.  configure sidebar frame ui using antd layout

   * clickable navbar using antd's *menu onclick* and *withRouter*
   * or just *Link*

9. add article page ui

   * use *Table* to display data 
   * set up mock api using *rap2.taobao.org* 
   * fetch using axiois, set up axios and interceptors
   * format time using *moment js* 
   * add delete and edit function
   * delete: use *model* with return promise 
   * edit: forward link and data using *this.props.history.push()* from *withRouter*

10. article edit page:

    * use antd's *form*, includes built-in validator 
    * rich text editor: 
      * div contenteditable=''
      * document.execCommand('bold')
      * document.designMode = 'on'

    rtf editor: *wangeditor*, *Quill*

    md editor: *edit.md*
    
    WYSIWYG editor: *CKEditor, TinyMCE*
    
11. dashboard page:

    * charts using *echarts* or *bizcharts* or *antv g2*
    * statistic blocks ui using *col, row, flex, card, statistics*

12. add top-right dropdown menu for notification and logout

13. use redux to manage notification read status

    * npm i **redux, react-redux, redux-thunk** -S

    * create *src/store.js*

    * ```js
      import { createStore, applyMiddleware} from 'redux'
      import thunk from 'redux-thunk'
      
      import rootReducer from './reducers'
      
      export default createStore(
        rootReducer,
        applyMiddleware(thunk)
      )
      ```

    * create reducer with initState

    * combine reducers to rootReducer

    * in /src/init.js,

      *  import Provider from react-redux, import store
      * wrap everything in render with <Provider store={store}>

    * in views,

      *  import connect from react-redux

      * connect(component) or @connect() decorator, check if there is a dispatch method in props.

      * add mapState

      * ```js
        const mapState = state => {
          const { list } = state.notification
          return {
            list
          }
        }
        
        @connect(mapState)
        class Notifications extends Component {
        ```

    * create actions

      * actionTypes.js -> contains actiontype names
      * notifications.js -> dispatch action(types and payload)
      * import action in component, call action on event 
      * in reducer, import actiontypes and handle actions in switch case

