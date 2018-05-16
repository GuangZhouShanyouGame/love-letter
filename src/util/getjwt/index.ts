import api from 'util/api'

import * as cookie from 'cookie_js'

export default {
  async getJwt() {
    const {href} = location;
    const {hw_auth_code} = this.formatQuery(href);
    const res = await api.get24authCode(hw_auth_code);
    if(res.code === 0) {
      const data = res.data;
      cookie.cookie.set('auth_data', JSON.stringify(data),{
        expires:7
      });
      alert('步骤12：' + window.location.href.split('?')[0])
      const url = window.location.href.split('?')[0];
      window.location.href = url + '#/loading';
    } else {
      alert('步骤13：' + window.location.href.split('?')[0])
      return false;
    }
  },

  check() {
    const url = encodeURIComponent(window.location.href);
    const wxappid = 'wx86c9e036cd37b848';
    const {href} = location;
    const {hw_auth_code} = this.formatQuery(href);

    if (hw_auth_code) {
      this.getJwt();}
    // } else {
    //   const redirect_uri = "http://auth.24haowan.com/auth?wxappid=" + wxappid + "&redirect_uri=" + url + "&id=666&type=snsapi_userinfo";
    //   location.href = redirect_uri;
    // }
  },

  formatQuery(query) {

    if (query.indexOf('?') > 0) {
      const result = {};
      const queryFormat = query
        .split('?')[1]
        .split('#/');
      queryFormat.map((v) => {
        const formatData = v.split('=');
        result[formatData[0]] = formatData[1];
        return false;
      });
      return result;
    }
  }

}

// export default check;
