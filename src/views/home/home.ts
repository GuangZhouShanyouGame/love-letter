import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './home.vue'
import wxapi from 'util/wxapi'
import conFig from 'util/config'
import * as cookie from 'cookie_js'

@Component({
  mixins: [template],
  components: {}
})
export default class Home extends Vue {
  // async created() {
  //   // api example
  //   let res = await this.api.getPackage()
  //   console.log(res.content)
  // }

  auth_data = {};

  showNoLetter = false;
  showShareTips = false;
  shareTipText = '';

  async mounted() {
    this.auth_data = JSON.parse(cookie.cookie.get('auth_data'));
    wxapi.wxRegister(this.wxRegCallback);
  }

  async getMails() {
    let res = await this.api.getMails({});
    if(res.code === "0") {
      if(res.payload.mails.length > 0) {
        this.$router.push({path:'/myLoveLetter'});
      } else {
        this.showNoLetter = true;
      }
    }
  }

  // 点击我的情书按钮
  onMails() {
    this.getMails();
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
      title: wxapi.opstions.title, // 分享标题
      link: conFig.host + '#/write/' + (<any>that.auth_data).openid, // 分享链接
      imgUrl: wxapi.opstions.imgUrl,// 分享图标
      success() {
        that.showNoLetter = false;
        setTimeout(() => {
          that.showShareTips = true;
          that.shareTipText = '分享成功'
        },1000);

        setTimeout(() => {
          that.showShareTips = false;
        },2500);
        that.shares();
      },
      error() {
        that.showNoLetter = false;
        setTimeout(() => {
          that.showShareTips = true;
          that.shareTipText = '分享失败'
        },1000);

        setTimeout(() => {
          that.showShareTips = false;
        },2500)
      }
    }
    wxapi.ShareTimeline(opstion);
  }

  // 分享给朋友
  wxShareAppMessage() {
    const that = this;
    let opstion = {
      title: wxapi.opstions.title, // 分享标题
      desc: wxapi.opstions.desc,
      link: conFig.host + '#/write/'+ (<any>that.auth_data).openid, // 分享链接
      imgUrl: wxapi.opstions.imgUrl,// 分享图标
      success() {
        that.showNoLetter = false;
        setTimeout(() => {
          that.showShareTips = true;
          that.shareTipText = '分享成功'
        },1000);

        setTimeout(() => {
          that.showShareTips = false;
        },2500);
        that.shares();
      },
      error() {
        that.showNoLetter = false;
        setTimeout(() => {
          that.showShareTips = true;
          that.shareTipText = '分享失败'
        },1000);

        setTimeout(() => {
          that.showShareTips = false;
        },2500)
      }
    }
    wxapi.ShareAppMessage(opstion);
  }

  // 分享成功时调用
  async shares() {
    let res = await this.api.shares();
  }
}

