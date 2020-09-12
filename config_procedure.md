1. npm i --save-dev **react-app-rewired** and **customize-cra**, 

2. change *package.json* and *config-overrides.js*

   ```js
   "scripts": {
       "start": "react-app-rewired start",
       "build": "react-app-rewired build",
       "test": "react-app-rewired test",
       "eject": "react-scripts eject",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     },
   ```

   

3. npm i --save-dev **less** and **less-loader**

4. npm i  --save-dev **babel-plugin-import**

5. install **antd** in *config-overrides* and theme less variables file

   * install babel-plugin-import
   * *in new verision should use craco and craco-antd*

   ```js
   /**
    * configueration of customize-cra and react-app-rewired
    */
   
   const { override, addLessLoader, fixBabelImports, addDecoratorsLegacy } = require("customize-cra")
   const theme = require('./lessVars')
   
   module.exports = override(
     fixBabelImports("import", {
       libraryName: "antd",
       libraryDirectory: "es",
       style: true
     }),
   
     addDecoratorsLegacy(),
   
     addLessLoader({
       lessOptions: {
         javascriptEnabled: true,
         modifyVars: theme
       }
     }),
     
   )
   
   ```

   

6. set decorator in cra-decorator with *addDecoratorLegacy*, @babel/plugin-proposal-decorators,  and setup HOC

7. set up folder

   * components, views, routes
   * reducers, actions, store

8. set up react-router-dom 

   * creating folder in views and export them 
   * import into routes and set up pathname
   * set up router, route, switch
   * lazy load routes using **react-loadable**

9. configure sidebar frame ui using antd layout

   * clickable navbar using antd's *menu onclick* and *withRouter*
   * or just *Link*

10. add article page ui

   * use *Table* to display data 
   * set up mock api using *rap2.taobao.org* 
   * fetch using axiois, set up axios and interceptors
   * format time using *moment js* 
   * add delete and edit function
   * delete: use *model* with return promise 
   * edit: forward link and data using *this.props.history.push()* from *withRouter*

11. article edit page:

    * use antd's *form*, includes built-in validator 
    * rich text editor: 
      * div contenteditable=''
      * document.execCommand('bold')
      * document.designMode = 'on'

    rtf editor: *wangeditor*, *Quill*

    md editor: *edit.md*

    WYSIWYG editor: *CKEditor, TinyMCE*

12. dashboard page:

    * charts using *echarts* or *bizcharts* or *antv g2*
    * statistic blocks ui using *col, row, flex, card, statistics*

13. add top-right dropdown menu for notification and logout

14. use redux to manage notification read status

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

15. persist login in local storage or session storage
    
    * save authToken and userinfo 



16. add permission levels that seperates base users and admins to view different pages ( restrict page authorization)
    * add roles to routes that assigns user permissions
    * redirect to no auth page if user has no perssion to visit a certain page

17. fix error caused from setState of unmounted component

    * caused by quickly changing between pages that used ajax requests

    * switching to another page cause the component to unmount. When the ajax response is received after the component is unmounted, it still wants to store response to state using setState, but it will raise an error of setState on unmounted components 

    * solution: 

    * 1. abort xhr on componentWillUnmount()

      2. check if component is mounted before setState()

         ```
             if (!this.updater.isMounted(this)) return 
         ```

         

