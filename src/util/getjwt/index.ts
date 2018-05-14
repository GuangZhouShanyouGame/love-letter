import api from 'util/api'

export default {
  async getJwt() {
    const {search} = location;
    const { hw_auth_code } = this.formatQuery(search);

    const data = await api.get24authCode(hw_auth_code);

    if (!data) {
      return false;
    } else {
      const { data: { data: fetchData } } = data;
      localStorage.setItem('auth_data', JSON.stringify(fetchData));
      (<any>window).auth_data = JSON.stringify(fetchData);
      return;
    }
  },

  check() {
    const url = window.location.href.split('#')[0];
    const wxappid = 'wx86c9e036cd37b848';
    const {search} = location;
    const {hw_auth_code} = this.formatQuery(search);

    if (hw_auth_code) {
      this.getJwt();
    } else {
      const redirect_uri = "http://auth.24haowan.com/auth?wxappid="+wxappid+"&redirect_uri="+url+"&id=666&type=snsapi_userinfo";
      //console.log(redirect_uri);
      //location.href = redirect_uri;
    }
  },

  formatQuery(query) {
    const result = {};
    const queryFormat = query.substr(1).split('&');
    queryFormat.map((v) => {
      const formatData = v.split('=');
      result[formatData[0]] = formatData[1];
      return this;
    });
    return result;
  }

}

// export default check;
