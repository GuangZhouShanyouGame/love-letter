import api from 'util/api'

// import * as cookie from 'cookie_js'

export default {
  async getJwt() {

    const {href} = location;
    const host = window.location.host;
    const pathname = window.location.pathname;

    const {hw_auth_code, cid} = this.formatQuery(href);
    const newhw_auth_code = hw_auth_code.split('#/')[0];
    const res = await api.get24authCode(newhw_auth_code);
    if(res.code === 0) {
      const data = res.data;

      localStorage.setItem('auth_data', JSON.stringify(data));
      const url = window.location.href.split('?')[0];
      console.log('http://' + host + pathname + '?cid=' + cid)
      if(cid) {
        location.href = 'http://' + host + pathname + '?cid=' + (cid + '');
      } else {
        location.href = 'http://' + host + pathname;
      }
      
      return false;
    } else {
      return false;
    }
  },

  formatQuery(query) {

    if (query.indexOf('?') > 0) {
      const result = {};
      const queryFormat = query
        .split('?')[1]
        .split('&');
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
