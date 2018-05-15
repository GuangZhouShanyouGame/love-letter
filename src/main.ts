import Vue from 'vue'
import store from 'store'
import App from './App.vue'
import router from 'router'
import svgicon = require('vue-svgicon')

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

//import 'vue2-animate/dist/vue2-animate.min.css'

import * as cookie from 'cookie_js'

// import all icons
import 'components/icons'

Vue.use(svgicon, {
  tagName: 'icon'
})

router.beforeEach((to, from, next) => {
  if(cookie.cookie.get('auth_data') && to.path === '/auth'){
    next('/home');
    return false
  }

  if(cookie.cookie.get('auth_data') === undefined && to.path !== '/auth') {
    cookie.cookie.set('beforeLoginUrl', to.fullPath,{
      expires:7
    });
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
