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

  shares() {
    return http.post('/cgs/shares', {})
  },

  // 获取密钥
  getKey(params) {
    return http.get('/cgs/mails/' + params.id, {})
  },

  get24authCode(Code) {
    return http.get('/jwt-token', {
      code:Code
    },'http://auth.24haowan.com')
  },

  getBoot(params) {
    return http.post('/cgs/boot', {
      headimgurl: params.headimgurl,
      nickname: params.nickname,
    })
  },

  postContent (params) {
    return http.post('/cgs/mails', {
      content: params.content,
      to_openid: params.to_openid,
    })
  },

   getKeyMail(params) {
    return http.get('/cgs/keys/' + params.key, {})
   },

   getTicket(params){
    return http.get('/cgs/keys/' + params.key + '/ticket', {})
   },

  http: http,
  axios: axios
}
