
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './auth.vue'
import getjwt from 'util/getjwt'
import conFig from 'util/config'
import * as cookie from 'cookie_js'

@Component({
  mixins: [template]
})
export default class Auth extends Vue {
  async mounted() {
    const url = window.location.href;
    const host = window.location.host;
    const pathname = window.location.pathname;

    const authData = localStorage.getItem('auth_data');

    if(url.indexOf('hw_auth_code') > 0){
      if(authData === null) {
        getjwt.getJwt();
      } else {
        location.href = 'http://' + host + pathname;
      }
    } else {
      if(authData === null) {
        localStorage.setItem('router', this.$route.query.router);
        const newUrl = 'http://' + host + pathname;
        const wxappid = conFig.wxappid;
        const redirect_uri = "http://auth.24haowan.com/auth?wxappid=" + wxappid + "&redirect_uri="+ newUrl + "&id=666&type=snsapi_userinfo";
        location.href = redirect_uri;
      }else {
        location.href = 'http://' + host + pathname;
      }
    }
  }
}
