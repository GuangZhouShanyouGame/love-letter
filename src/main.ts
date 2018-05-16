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

const loadScript = function(url) {
  const script = document.createElement('script');

  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', url);
  script.onload = function() {
      console.log('custom script loaded: ' + url);
  };
  script.onerror = function() {
      console.log('loading custom script fail: ' + url);
  };

  document.documentElement.appendChild(script);
};

loadScript('http://24haowan-cdn.shanyougame.com/public/js/vconsole.min.js')

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
    localStorage.setItem('beforeLoginUrl', JSON.stringify(to.fullPath));
    // cookie.cookie.set('beforeLoginUrl', to.fullPath,{
    //   expires:7
    // });
    next('/auth');
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
