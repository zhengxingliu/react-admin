(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[5],{114:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(144),r=n(8),o=n(69),i=function(){return window.localStorage.removeItem("authToken"),window.sessionStorage.removeItem("authToken"),window.localStorage.removeItem("userInfo"),window.sessionStorage.removeItem("userInfo"),{type:r.a.LOGIN_FAILED}},c=function(e){return function(t){t({type:r.a.START_LOGIN});var n=e.remember;Object(o.f)(e).then((function(e){if(200===e.status){var o=e.data.data,c=o.authToken,l=Object(a.a)(o,["authToken"]);!0===n?(window.localStorage.setItem("authToken",c),window.localStorage.setItem("userInfo",JSON.stringify(l))):(window.sessionStorage.setItem("authToken",c),window.sessionStorage.setItem("userInfo",JSON.stringify(l))),t(function(e){return{type:r.a.LOGIN_SUCCESS,payload:{userInfo:e}}}(e.data.data))}else t(i())})).catch((function(e){console.log(e)}))}},l=function(){return function(e){e(i())}},u=function(e){return{type:r.a.CHANGE_AVATAR,payload:{avatarUrl:e}}}},121:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var a=n(8),r=n(69),o=function(e){return{type:a.a.START_UPDATING_NOTICIFATION_STATE,payload:{id:e}}},i=function(e){return{type:a.a.FINISH_UPDATING_NOTIFICATION_STATE,payload:{id:e}}},c=function(e){return function(t){t(o(e)),setTimeout((function(){t({type:a.a.MARK_NOTIFICATION_AS_READ_BY_ID,payload:{id:e}}),t(i(e))}),500)}},l=function(e){return function(t){t(o(e)),setTimeout((function(){t({type:a.a.MARK_NOTIFICATION_AS_UNREAD_BY_ID,payload:{id:e}}),t(i(e))}),500)}},u=function(){return function(e){e(o()),setTimeout((function(){e({type:a.a.MARK_ALL_NOTIFICATIONS_AS_READ}),e(i())}),500)}},s=function(){return function(e){e({type:a.a.FETCH_NOTIFICATIONS}),Object(r.d)().then((function(t){e({type:a.a.RECEVIED_NOTIFICATIONS,payload:{list:t.data.list}})})).catch((function(e){console.log(e)}))}}},141:function(e,t,n){e.exports=n.p+"static/media/AdminLogo.b14db446.png"},173:function(e,t,n){e.exports=n(248)},227:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n(62),c=n(9),l=n(50),u=n(45),s=n(46),d=n(48),m=n(47),p=n(250),I=n(251),f=n(252),O=n(31);function A(){return r.a.createElement("div",null,"loading...")}n(169);var T,N,E=n(119),_=(n(170),n(137)),h=(n(171),n(41)),b=(n(172),n(89)),g=(n(188),n(44)),S=n(249),y=n(121),C=n(114),v=(n(227),n(141)),j=n.n(v),R=g.a.Header,L=g.a.Content,F=g.a.Sider,k=Object(l.b)((function(e){return{notificationCount:e.notifications.list.filter((function(e){return!1===e.hasRead})).length,avatar:e.user.avatar,displayName:e.user.displayName}}),{getNotificationList:y.a,logout:C.c})(T=Object(c.g)(T=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onDropMenuClick=function(t){var n=t.key;"/logout"===n?e.props.logout():e.props.history.push(n)},e.renderMenu=function(){return r.a.createElement(h.a,{onClick:e.onDropMenuClick},r.a.createElement(h.a.Item,{key:"/admin/notifications"},r.a.createElement(b.a,{dot:e.props.notificationCount},"Notification")),r.a.createElement(h.a.Item,{key:"/admin/profile"},"Account Setting"),r.a.createElement(h.a.Item,{key:"/logout"},"Log Out"))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getNotificationList()}},{key:"render",value:function(){var e=V.filter((function(e){return!0===e.isNav}));return r.a.createElement(g.a,{className:"main-layout"},r.a.createElement(R,{className:"header main-header"},r.a.createElement("div",{className:"logo main-logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:j.a,alt:"react-admin"}),r.a.createElement("h1",null," React Admin"))),r.a.createElement("div",null,r.a.createElement(E.a,{overlay:this.renderMenu()},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(b.a,{count:this.props.notificationCount},r.a.createElement(_.a,{src:this.props.avatar})),r.a.createElement("span",{style:{padding:"0 4px 0 4px"}},"Hello, ",this.props.displayName),r.a.createElement(S.a,null))))),r.a.createElement(g.a,null,r.a.createElement(F,{breakpoint:"lg",collapsedWidth:"0",style:{zIndex:100}},r.a.createElement(h.a,{onClick:this.menuClicked,mode:"inline",defaultSelectedKeys:e[0].pathname,selectedKeys:this.props.location.pathname,defaultOpenKeys:e[0].pathname,style:{height:"100%",borderRight:0}},e.map((function(e){return r.a.createElement(h.a.Item,{key:e.pathname,icon:r.a.createElement(e.icon,null)},r.a.createElement(i.b,{to:e.pathname}," ",e.title))})))),r.a.createElement(g.a,{className:"content-layout",style:{padding:"24px"}},r.a.createElement(L,{className:"site-layout-background",style:{margin:0,backgroundColor:"#FFF"}},r.a.createElement("div",{className:"content",style:{height:"100px"}},this.props.children),r.a.createElement(D,null)))))}}]),n}(a.Component))||T)||T,D=(n(246),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("span",null,"Demo website"),r.a.createElement("span",null,"Mock API using ",r.a.createElement("a",{href:"http://rap2.taobao.org/"},"Rap2")),"\xa9 ",(new Date).getFullYear())}}]),n}(a.Component)),w=Object(O.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(7)]).then(n.bind(null,1105))}),{fallback:r.a.createElement(A,null)}),G=Object(O.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(14)]).then(n.bind(null,1098))}),{fallback:r.a.createElement(A,null)}),U=Object(O.a)((function(){return n.e(16).then(n.bind(null,1099))}),{fallback:r.a.createElement(A,null)}),M=Object(O.a)((function(){return n.e(19).then(n.bind(null,1100))}),{fallback:r.a.createElement(A,null)}),K=Object(O.a)((function(){return Promise.all([n.e(0),n.e(12),n.e(17)]).then(n.bind(null,1101))}),{fallback:r.a.createElement(A,null)}),P=Object(O.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(9)]).then(n.bind(null,1103))}),{fallback:r.a.createElement(A,null)}),H=Object(O.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(11)]).then(n.bind(null,1104))}),{fallback:r.a.createElement(A,null)}),x=Object(O.a)((function(){return n.e(15).then(n.bind(null,1106))}),{fallback:r.a.createElement(A,null)}),B=Object(O.a)((function(){return Promise.all([n.e(0),n.e(4),n.e(13),n.e(18)]).then(n.bind(null,1102))}),{fallback:r.a.createElement(A,null)}),Y=[{pathname:"/login",component:G},{pathname:"/404",component:U}],V=[{pathname:"/admin/dashboard",component:w,title:"Dashboard",isNav:!0,icon:p.a,role:["001","002","003"]},{pathname:"/admin/article",component:P,exact:!0,title:"Article List",isNav:!0,icon:I.a,role:["001","002","003"]},{pathname:"/admin/article/edit/:id",component:H,role:["001","002"]},{pathname:"/admin/settings",component:M,title:"Settings",isNav:!0,icon:f.a,role:["001"]},{pathname:"/admin/notifications",component:K,title:"Notifications",role:["001","002","003"]},{pathname:"/admin/profile",component:B,role:["001","002","003"]},{pathname:"/admin/no-auth",component:x,role:["001","002","003"]}],J=Object(l.b)((function(e){return{isLogin:e.user.isLogin,role:e.user.role}}))(N=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.isLogin?r.a.createElement(k,null,r.a.createElement(c.d,null,V.map((function(t){return r.a.createElement(c.b,{key:t.pathname,path:t.pathname,exact:t.exact,render:function(n){return t.role.includes(e.props.role)?r.a.createElement(t.component,n):r.a.createElement(c.a,{to:"/admin/no-auth"})}})})),r.a.createElement(c.a,{to:V[0].pathname,from:"/admin",exact:!0}),r.a.createElement(c.a,{to:"/404"}))):r.a.createElement(c.a,{to:"/login"})}}]),n}(a.Component))||N,q=(n(247),n(42)),z=n(143),W=n(7),Q=n(8),X={list:[],isLoading:!1},Z=Boolean(window.localStorage.getItem("authToken"))||Boolean(window.sessionStorage.getItem("authToken")),$=JSON.parse(window.localStorage.getItem("userInfo"))||JSON.parse(window.sessionStorage.getItem("userInfo")),ee=Object(W.a)(Object(W.a)({},$),{},{isLogin:Z,isLoading:!1}),te=Object(q.c)({notifications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.a.START_UPDATING_NOTICIFATION_STATE:return Object(W.a)(Object(W.a)({},e),{},{list:e.list.map((function(e){return t.payload.id?e.id===t.payload.id&&(e.isLoading=!0):!1===e.hasRead&&(e.isLoading=!0),e}))});case Q.a.FINISH_UPDATING_NOTIFICATION_STATE:return Object(W.a)(Object(W.a)({},e),{},{list:e.list.map((function(e){return t.payload.id?e.id===t.payload.id&&(e.isLoading=!1):!0===e.hasRead&&(e.isLoading=!1),e}))});case Q.a.MARK_NOTIFICATION_AS_READ_BY_ID:return Object(W.a)(Object(W.a)({},e),{},{list:e.list.map((function(e){return e.id===t.payload.id&&(e.hasRead=!0),e}))});case Q.a.MARK_NOTIFICATION_AS_UNREAD_BY_ID:return Object(W.a)(Object(W.a)({},e),{},{list:e.list.map((function(e){return e.id===t.payload.id&&(e.hasRead=!1),e}))});case Q.a.MARK_ALL_NOTIFICATIONS_AS_READ:return Object(W.a)(Object(W.a)({},e),{},{list:e.list.map((function(e){return e.hasRead=!0,e}))});case Q.a.RECEVIED_NOTIFICATIONS:return Object(W.a)(Object(W.a)({},e),{},{list:t.payload.list,isLoading:!1});case Q.a.FETCH_NOTIFICATIONS:return Object(W.a)(Object(W.a)({},e),{},{isLoading:!0});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.a.START_LOGIN:return Object(W.a)(Object(W.a)({},e),{},{isLoading:!0});case Q.a.LOGIN_SUCCESS:return Object(W.a)(Object(W.a)(Object(W.a)({},e),t.payload.userInfo),{},{isLoading:!1,isLogin:!0});case Q.a.LOGIN_FAILED:return{id:"",displayName:"",avatar:"",isLogin:!1,isLoading:!1,role:[]};case Q.a.CHANGE_AVATAR:return Object(W.a)(Object(W.a)({},e),{},{avatar:t.payload.avatarUrl});default:return e}}}),ne=Object(q.d)(te,Object(q.a)(z.a));Object(o.render)(r.a.createElement(l.a,{store:ne},r.a.createElement(i.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/admin",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(c.a,{to:"/admin",from:"/",exact:!0}),Y.map((function(e){return r.a.createElement(c.b,{key:e.pathname,path:e.pathname,component:e.component})})),r.a.createElement(c.a,{to:"/404"})))),document.querySelector("#root"))},69:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return I})),n.d(t,"f",(function(){return f}));n(163);var a=n(100),r=n(7),o=n(86),i=n.n(o),c=i.a.create({baseURL:"http://rap2.taobao.org:38080/app/mock/259142"}),l=i.a.create({baseURL:"http://rap2.taobao.org:38080/app/mock/259142"});c.interceptors.request.use((function(e){return e.data=Object(r.a)(Object(r.a)({},e.data),{},{authToken:"Bearer-tokenplaceholder"}),e})),c.interceptors.response.use((function(e){if(200===parseInt(e.data.code)&&""===e.data.errMsg)return e.data;a.a.error("An error occurred.")}));var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.post("/api/v1/articlelist",{offset:e,limited:t})},s=function(e){return c.delete("/api/v1/article/".concat(e))},d=function(e){return c.post("/api/v1/article/:".concat(e))},m=function(e,t){return c.put("/api/v1/article/:".concat(e),t)},p=function(){return c.post("/api/v1/statistics/visits")},I=function(){return c.post("/api/v1/notifications")},f=function(e){return l.post("/api/v1/login",e)}},8:function(e,t,n){"use strict";t.a={MARK_NOTIFICATION_AS_READ_BY_ID:"MARK_NOTIFICATION_AS_READ_BY_ID",MARK_NOTIFICATION_AS_UNREAD_BY_ID:"MARK_NOTIFICATION_AS_UNREAD_BY_ID",MARK_ALL_NOTIFICATIONS_AS_READ:"MARK_ALL_NOTIFICATIONS_AS_READ",START_UPDATING_NOTICIFATION_STATE:"START_UPDATING_NOTICIFATION_STATE",FINISH_UPDATING_NOTIFICATION_STATE:"FINISH_UPDATING_NOTIFICATION_STATE",RECEVIED_NOTIFICATIONS:"RECEVIED_NOTIFICATIONS",FETCH_NOTIFICATIONS:"FETCH_NOTIFICATIONS",START_LOGIN:"START_LOGIN",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILED:"LOGIN_FAILED",CHANGE_AVATAR:"CHANGE_AVATAR"}}},[[173,6,8]]]);
//# sourceMappingURL=main.f2176e18.chunk.js.map