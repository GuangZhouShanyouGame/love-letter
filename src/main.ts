import Vue from 'vue'
import store from 'store'
import App from './App.vue'
import router from 'router'
import svgicon = require('vue-svgicon')

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

//import 'vue2-animate/dist/vue2-animate.min.css'

// import * as cookie from 'cookie_js'

// import all icons
import 'components/icons'

// const loadScript = function(url) {
//   const script = document.createElement('script');

//   script.setAttribute('type', 'text/javascript');
//   script.setAttribute('src', url);
//   script.onload = function() {
//       console.log('custom script loaded: ' + url);
//   };
//   script.onerror = function() {
//       console.log('loading custom script fail: ' + url);
//   };

//   document.documentElement.appendChild(script);
// };
// loadScript('http://24haowan-cdn.shanyougame.com/public/js/vconsole.min.js')
var AlloyLever = window.AlloyLever || false
if(!!AlloyLever) {
  AlloyLever.config({
    cdn: '//24haowan-cdn.shanyougame.com/public/js/vconsole.min.js',  //vconsole的CDN地址
    reportUrl: "//a.qq.com",  //错误上报地址
    reportPrefix: 'qun',    //错误上报msg前缀，一般用于标识业务类型
    reportKey: 'msg',        //错误上报msg前缀的key，用户上报系统接收存储msg
    otherReport: {              //需要上报的其他信息
      uin: 491862102
    },
    entry: "#entry"          //请点击这个DOM元素6次召唤vConsole。//你可以通过AlloyLever.entry('#entry2')设置多个机关入口召唤神龙
  })
}
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1134b1f1b1b88621c5467480ef715d35";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

Vue.use(svgicon, {
  tagName: 'icon'
})

router.beforeEach((to, from, next) => {
  const authData = localStorage.getItem('auth_data');

  if(authData !== null && to.path === '/auth'){
    next('/loading');
    return false
  }

  if(authData === null && to.path !== '/auth') {
    next({ path: '/auth', query: { router: window.location.hash.substr(1) } });
    return false;
  }

  next();
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
