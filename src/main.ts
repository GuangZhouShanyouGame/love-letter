import Vue from 'vue'
import store from 'store'
import App from './App.vue'
import router from 'router'
import svgicon = require('vue-svgicon')

//import 'vue2-animate/dist/vue2-animate.min.css';

// import all icons
import 'components/icons'

Vue.use(svgicon, {
  tagName: 'icon'
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
