
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
    alert('进入步骤4：'+url)
    if(url.indexOf('hw_auth_code') > 0){
      alert('进入步骤5：'+ cookie.cookie.get('auth_data'))
      if(cookie.cookie.get('auth_data') === undefined) {
        alert('进入步骤6：'+ cookie.cookie.get('auth_data'))
        getjwt.getJwt();
      } else {
        const beforeLoginUrl = cookie.cookie.get('beforeLoginUrl');
        alert('进入步骤7：'+ beforeLoginUrl)
        if(beforeLoginUrl === undefined) {
          window.location.href = url.split('?')[0] + '#/loading';
          alert('进入步骤8：'+ url.split('?')[0])
        } else {
          window.location.href = url.split('?')[0] + '#' + beforeLoginUrl;
          alert('进入步骤9：'+ url.split('?')[0] + '#' + beforeLoginUrl)
          cookie.cookie.set('beforeLoginUrl', '');
        }
      }
    } else {
      if(cookie.cookie.get('auth_data') === undefined) {
        alert('进入步骤10')
        const newUrl = url.split('#/')[0]
        const wxappid = 'wx86c9e036cd37b848';
        const redirect_uri = "http://auth.24haowan.com/auth?wxappid=" + wxappid + "&redirect_uri=" + newUrl + "&id=666&type=snsapi_userinfo";
        location.href = redirect_uri;
      }else {
        alert('进入步骤11：'+url.split('?')[0] + '#/loading')
        window.location.href = url.split('?')[0] + '#/loading';
      }
    }
  }
}
