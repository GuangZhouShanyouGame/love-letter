
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './myLoveLetter.vue'
import * as Clipboard from 'clipboard'
import wxapi from 'util/wxapi'
import conFig from 'util/config'
import * as cookie from 'cookie_js'

@Component({
  mixins: [template]
})
export default class MyLoveLetter extends Vue {

  showBrandEgg = false;

  auth_data = {};
  mails = [];
  mailsTotal = 0;

  swiperOption = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  showKeys = false;
  keyText = '';

  showFlower = false;

  showShareTips = false;
  shareTipText = '';

  $refs:{
    mySwiper
  }

  async created() {
    this.getMails();
  }

  async mounted() {
    this.auth_data = JSON.parse(cookie.cookie.get('auth_data'));
    wxapi.wxRegister(this.wxRegCallback);
  }

  // 获取信件列表
  async getMails() {
    let res = await this.api.getMails({});
    if(res.code === "0") {
      this.mails = res.payload.mails;
      this.mailsTotal = res.payload.mails.length;
    }
  }

  // 获取密钥
  async getKey(Id) {
    let res = await this.api.getKey({
      id: Id
    });
    if(res.code === "0") {
      this.keyText = res.payload.key;
    }

    if(res.code === '1000') {
      this.showFlower = true;
    }

    if(res.code === '1001') {
      this.$router.push({path: '/home'});
    }
  }

  // 迈出这一步
  onStepOut() {
    const item = this.$refs.mySwiper.swiper.snapIndex;
    const Id = this.mails[item].id;
    this.getKey(Id);
    this.showKeys = true;
  }



  // 复制密钥
  fuzhi(){
    const clipboard = new Clipboard('.btn-fuzhi');

    clipboard.on('success', function(e) {
      e.clearSelection();
    });

     clipboard.on('error', function(e) {});
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
        that.showKeys = false;
        that.showFlower = false;
        setTimeout(() => {
          that.showShareTips = true;
          that.shareTipText = '分享成功';
        },1000);

        setTimeout(() => {
          that.showShareTips = false;
        },2500);
        that.shares();
      },
      error() {
        that.showKeys = false;
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
        that.showKeys = false;
        that.showFlower = false;
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
        that.showKeys = false;
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
