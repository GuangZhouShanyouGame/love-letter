webpackJsonp([2],{16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(22),o=n(6);t.default={getPackage:function(){return a.default.get("/post/1",{},"https://jsonplaceholder.typicode.com")},getSdkConfig:function(e){return a.default.get("/public/wechat/sdk-config",{url:e.url})},getMails:function(e){return a.default.get("/cgs/mails",{})},http:a.default,axios:o.default}},17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),o=n(1),r=n(21),u=n(16);o.default.use(r.default);var c=new r.default.Store({state:{count:0,content:""},mutations:{add:function(e){e.count++},updateContent:function(e,t){e.content=t.content}},getters:{doubleCount:function(e){return 2*e.count}},actions:{getContent:function(e,t){var n=e.commit;return a.__awaiter(this,void 0,void 0,function(){var e;return a.__generator(this,function(a){switch(a.label){case 0:return[4,u.default.getPackage(t)];case 1:return(e=a.sent())instanceof Error?[2,Promise.reject(e)]:(n("updateContent",{content:e.content}),[2])}})})}}});t.default=c},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n(17),r=n(46),u=n(49),c=n(14),i=n(52);n(54),a.default.use(i.default),n(55),a.default.use(c,{tagName:"icon"}),new a.default({el:"#app",store:o.default,router:u.default,render:function(e){return e(r.default)}})},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(4),r=n(6),u=n(41),c=n(44);!function(e){e[e.LOGICERROR=0]="LOGICERROR",e[e.TIMEOUTERROR=1]="TIMEOUTERROR",e[e.NETWORKERROR=2]="NETWORKERROR"}(a||(a={}));var i={baseURL:c.default.baseURL},s=function(e){return void 0!==e.code&&null!==e.code&&0===Number(e.code)},d=function(e){return e.data||{}},f={};["get","post","put","delete"].forEach(function(e){f[e]=function(t,n,c){var f={method:e,url:t,baseURL:c||i.baseURL},l=r.default.create(i);return l.interceptors.request.use(function(e){var t=Date.now()/1e3,n={ts:t};return e.params=o.__assign({},e.params,n),e},function(e){return Promise.reject(e)}),l.interceptors.response.use(function(e){if(!s(e.data)){var t={msg:e.data.msg,code:e.data.code,type:a[a.LOGICERROR],config:e.config};return Promise.reject(t)}return d(e)},function(e){var t={msg:e.message||"网络故障",type:/^timeout of/.test(e.message)?a[a.TIMEOUTERROR]:a[a.NETWORKERROR],config:e.config};return Promise.reject(t)}),"get"===e?f.params=n:n instanceof FormData?f.data=n:f.data=u.stringify(n),f.startTime=new Date,l.request(f).then(function(e){return e}).catch(function(e){return Promise.reject({err:e,stack:e.msg||e.stack||""})})}}),t.default=f},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(45);a.default.env="qa",t.default=a.default},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={env:"dev",baseURL:"http://test.c56e37f627a5a42e89b31387f12f59fab.cn-shenzhen.alicontainer.com"}},46:function(e,t,n){"use strict";function a(e){n(47)}Object.defineProperty(t,"__esModule",{value:!0});var o={},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],c={render:r,staticRenderFns:u},i=c,s=n(15),d=a,f=s(o,i,!1,d,null,null);t.default=f.exports},47:function(e,t){},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n(50),r=n(51);a.default.use(o.default);var u=[];t.default=new o.default({routes:u.concat(r.default)})},51:function(e,t,n){"use strict";function a(e){return function(t,a){n.e(0).then(function(a){var o={layout:n(59),loading:n(60),home:n(61),myLoveLetter:n(62),write:n(63),sendOut:n(64),watchMovie:n(65)};t(o[e])}.bind(null,n)).catch(a)}}Object.defineProperty(t,"__esModule",{value:!0});var o=[{name:"/",path:"/",component:a("layout"),redirect:"/loading",children:[{name:"loading",path:"/loading",component:a("loading")},{name:"home",path:"/home",component:a("home")},{name:"myLoveLetter",path:"/myLoveLetter",component:a("myLoveLetter")},{name:"write",path:"/write",component:a("write")},{name:"sendOut",path:"/sendOut",component:a("sendOut")},{name:"watchMovie",path:"/watchMovie",component:a("watchMovie")}]}];o.forEach(function(e){e.redirect||e.component||(e.component=a(e.name))}),t.default=o},54:function(e,t){},55:function(e,t,n){n(56)},56:function(e,t,n){n(14).register({vue:{width:400,height:400,viewBox:"0 0 400 400",data:'<path pid="0" d="M237.417 86.655l-30.226 52.352-30.225-52.352H76.311l130.88 226.69 130.88-226.69z"/><path pid="1" d="M237.417 86.655l-30.226 52.352-30.225-52.352h-48.303l78.528 136.014L285.72 86.655z"/>'}})}},[18]);