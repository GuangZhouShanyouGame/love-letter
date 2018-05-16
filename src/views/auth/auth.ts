
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './auth.vue'
import getjwt from 'util/getjwt'
import * as cookie from 'cookie_js'

@Component({
  mixins: [template]
})
export default class Auth extends Vue {
  async mounted() {
    const url = window.location.href;
    const host = window.location.host;
    const pathname = window.location.pathname;

    if(url.indexOf('hw_auth_code') > 0){
      if(cookie.cookie.get('auth_data') === undefined) {
        getjwt.getJwt();
      } else {
        const beforeLoginUrl = cookie.cookie.get('beforeLoginUrl');
        if(beforeLoginUrl === undefined) {
          location.href = 'http://' + host + pathname + '?loveletter=love#/loading';
        } else {
          location.href = 'http://' + host + pathname + '?loveletter=love#'; + beforeLoginUrl;
          cookie.cookie.set('beforeLoginUrl', '');
        }
      }
    } else {
      if(cookie.cookie.get('auth_data') === undefined) {
        const newUrl = 'http://' + host + pathname
        const wxappid = 'wx86c9e036cd37b848';
        const redirect_uri = "http://auth.24haowan.com/auth?wxappid=" + wxappid + "&redirect_uri=" + newUrl + "&id=666&type=snsapi_userinfo";
        location.href = redirect_uri;
      }else {
        location.href = 'http://' + host + pathname + '?loveletter=love#/loading';
      }
    }
  }
}
