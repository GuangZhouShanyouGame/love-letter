
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './sendOut.vue'
import wxapi from 'util/wxapi'
import conFig from 'util/config'
import util from 'util/index'

@Component({
  mixins: [template]
})
export default class SendOut extends Vue {
  showBrandEgg = false;
  showNoLetter = false;
  myFirstLetter = false;

  openid = '';
  created() {
    util.handleInception.call(this)
  }
  async mounted() {
    this.openid = this.$route.params.openid;
    wxapi.wxRegister(this.wxRegCallback);
  }

  onReturnWrite() {
    this.$router.push({path: '/write/' + this.openid})
  }

  onReturnHome() {
    this.$router.push({path: '/home'})
  }
  onShowShare() {
    this.showNoLetter = true
  }
  //[wxRegCallback 用于微信JS-SDK回调]
  wxRegCallback () {
    this.wxShareTimeline();
    this.wxShareAppMessage();
  }
  goMyLetter() {
    this.$router.push({ path: '/myLoveLetter' });
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
    if (res.code === '0' && res.payload.system_mail === 'Y') {
      console.log('弹出弹窗')
      this.showNoLetter = false;
      this.myFirstLetter = true
    }
  }
}
