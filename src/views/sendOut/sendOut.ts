
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

  //[wxRegCallback 用于微信JS-SDK回调]
  wxRegCallback () {
    this.wxShareTimeline();
    this.wxShareAppMessage();
  }

  // 分享到朋友圈
  wxShareTimeline() {
    const that = this;
    let opstion = {
      title: '为TA寄出一封匿名情书，开始你们的故事吧', // 分享标题
      link: conFig.host, // 分享链接
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
      title: '为TA寄出一封匿名情书', // 分享标题
      desc: '520给我寄出一封匿名情书，开始我们的故事吧',
      link: conFig.host, // 分享链接
      imgUrl: wxapi.opstions.imgUrl,// 分享图标
      success() {
        that.shares();
      },
      error() {}
    }
    wxapi.ShareAppMessage(opstion);
  }

  // 分享成功时调用
  async shares() {
    let res = await this.api.shares();
  }
}
