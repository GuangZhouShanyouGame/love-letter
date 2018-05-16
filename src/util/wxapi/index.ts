import * as wx from 'weixin-js-sdk'
import api from 'util/api'

const wxApi = {
  opstions:{
    title: '为TA留下一封匿名情书',
    desc: 'desc',
    imgUrl: 'http://24haowan-cdn.shanyougame.com/dingzhi/love-letter/dist/qa/static/img/share.png'
  },
  // 判断是否是微信浏览器
  isweixin() {
    const ua = window
      .navigator
      .userAgent
      .toLowerCase();
    if (ua.match(/MicroMessenger/i) === null) {
      //console.log('这不是微信浏览器')
      return false;
    } else {
      if (ua.match(/MicroMessenger/i)[0] === 'micromessenger') {
        return true;
      } else {
        //console.log('这不是微信浏览器')
        return false;
      }
    }
  },

  async wxRegister(callback) {
    alert('调用了分享事件')
    let res = await api.getSdkConfig({url: window.location.href});

    alert(res)
    alert(res.code)
    alert(res.payload)

    if (res.code === "0") {
      wx.config({
        debug: false, appId: res.payload.appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
        timestamp: res.payload.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.payload.nonceStr, // 必填，生成签名的随机串
        signature: res.payload.signature, // 必填，签名，见附录1
        //需要分享的列表项:发送给朋友，分享到朋友圈
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
      })
    }

    wx.ready((res) => {
      if (callback) {
        callback();
      }
    })
  },

  // 分享到朋友圈
  ShareTimeline(opstion) {
    alert('调用了分享到朋友圈')
    wx.onMenuShareTimeline({
      title: opstion.title, // 分享标题
      link: opstion.link, // 分享链接
      imgUrl: opstion.imgUrl, // 分享图标
      success() {
        // 用户成功分享后执行的回调函数
        opstion.success()
        alert('啦啦啦分享给朋友圈成功')
      },
      cancel() {
        // 用户取消分享后执行的回调函数
        opstion.error()
        alert('啦啦啦分享给朋友圈失败')
      }
    })
  },

  // 分享给朋友
  ShareAppMessage(opstion) {
    alert('调用了分享给朋友')
    wx.onMenuShareAppMessage({
      title: opstion.title, // 分享标题
      desc: opstion.desc, // 分享描述
      link: opstion.link, // 分享链接
      imgUrl: opstion.imgUrl, // 分享图标
      type: opstion.type, // 分享类型,music、video或link，不填默认为link
      dataUrl: opstion.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
      success() {
        // 用户成功分享后执行的回调函数
        opstion.success()
        alert('啦啦啦分享给朋友成功')
      },
      cancel() {
        // 用户取消分享后执行的回调函数
        opstion.error()
        alert('啦啦啦分享给朋友失败')
      }
    })
  }
}

export default wxApi
