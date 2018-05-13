import http from './http'
import axios from 'axios'

export default {
  getPackage() {
    return http.get('/post/1', {}, 'https://jsonplaceholder.typicode.com')
  },

  // 获取微信sdk配置
  getSdkConfig(params) {
    return http.get('/public/wechat/sdk-config', {
      url: params.url
    })
  },

  // 获取信件列表
  getMails(params) {
    return http.get('/cgs/mails', {
      //offset: params.offset || 1,
      //limit: params.limit || 99999,
    })
  },

  http: http,
  axios: axios
}
