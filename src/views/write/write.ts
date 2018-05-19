
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './write.vue'
import wxapi from 'util/wxapi'
import conFig from 'util/config'
import util from 'util/index'

@Component({
  mixins: [template]
})
export default class Write extends Vue {
  params = {
    content: '',
    to_openid: ''
  }

  showBrandEgg = false;
  showHolder = true;
  auth_data = {};

  openid = '';
  userInfo = {}
  showTips = false;
  tipText = '';

  created () {
    util.handleInception.call(this)   
  }

  async mounted() {
    this.openid = this.$route.params.openid;
    this.params.to_openid = this.$route.params.openid;

    wxapi.wxRegister(this.wxRegCallback);

    this.getUserInfo();

    const authData = localStorage.getItem('auth_data');
    if(authData) {
      this.auth_data = JSON.parse(authData)
    }

    // 进入自己的页面，则跳转到首页
    if(this.openid === (<any>this.auth_data).openid) {
      this.$router.replace('/home')
    }

    document.querySelector('body').style.height = getComputedStyle(document.querySelector('body')).height
  }

  onSendOut() {
    if(this.params.content ==='') {
      this.showTips = true;
      this.tipText = '你的情书还未落笔';
      setTimeout(() => {
        this.showTips = false;
      },1500);
    } else {
      this.postContent(this.params);
    }
  }
  focus() {
    this.showHolder = false
  }
  focusTextarea() {
    document.querySelector('textarea').focus()
  }
  // 发送信件
  async postContent(params) {
    let res = await this.api.postContent(params);
    if(res.code === "0") {
      this.$router.push({path:'/sendOut/'+ this.openid});
    } else {
      this.showTips = true;
      this.tipText = res.msg;
      setTimeout(() => {
        this.showTips = false;
      },1500);
    }
  }
  async getUserInfo() {
    if(window.friendInfo && window.friendInfo[this.openid]) {
      this.userInfo = window.friendInfo[this.openid]
    } else {
      let res = await this.api.getFriendInfo({
        openid: this.openid,
      })
      if (res.code === '0') {
        this.userInfo = res.payload.user_info
        window.friendInfo = {}
        window.friendInfo[this.openid] = res.payload.user_info
      }
    }
  }
  onReturnBorrow() {
    this.$router.push({path:'/borrow/'+this.openid})
  }

  //[wxRegCallback 用于微信JS-SDK回调]
  wxRegCallback () {
    this.wxShareTimeline();
    this.wxShareAppMessage();
  }

  // 分享到朋友圈
  wxShareTimeline() {
    const that = this;
    let opstion = {
      title: '别再偷偷喜欢'+ JSON.parse(localStorage.getItem('auth_data')).nickname +'了，给TA写封匿名情书吧', // 分享标题
      link: conFig.host + '#/borrow/' + JSON.parse(localStorage.getItem('auth_data')).openid, // 分享链接
      imgUrl: wxapi.opstions.imgUrl,// 分享图标
      success() {
        that.shares();
      },
      error() {
      }
    }
    wxapi.ShareTimeline(opstion);
  }

  // 分享给朋友
  wxShareAppMessage() {
    const that = this;
    let opstion = {
      title: '别再偷偷喜欢'+ JSON.parse(localStorage.getItem('auth_data')).nickname +'了，给TA写封匿名情书吧', // 分享标题
      desc: '勇敢迈出这一步，说不定你们就有故事了呢！',
      link: conFig.host + '#/borrow/' + JSON.parse(localStorage.getItem('auth_data')).openid, // 分享链接
      imgUrl: wxapi.opstions.imgUrl,// 分享图标
      success() {
        that.shares();
      },
      error() { }
    }
    wxapi.ShareAppMessage(opstion);
  }

  // 分享成功时调用
  async shares() {
    let res = await this.api.shares();
  }
}
