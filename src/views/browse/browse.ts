
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './browse.vue'
import wxapi from 'util/wxapi'
import conFig from 'util/config'

@Component({
  mixins: [template]
})
export default class Browse extends Vue {

  auth_data = {};

  showBrandEgg = false;

  openid = '';

  swiperOption = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  }

  $refs:{
    mySwiper
  }

  borrowData = []

  total = 0;

  showTips = false;
  tipText = '';

  userInfo = {};

  async mounted() {
    this.openid = this.$route.params.openid;

    const num = this.randNum(0,this.total);

    this.$refs.mySwiper.swiper.slideTo(num, 0, false);
    wxapi.wxRegister(this.wxRegCallback);

    // 用vue变量绑定dom会卡顿，应该是swiper的bug。暂时没有更快捷优雅的办法解决
    const currentIndexSpan = document.querySelector('.borrow-current-index')
    currentIndexSpan.innerHTML = this.$refs.mySwiper.swiper.activeIndex
    this.$refs.mySwiper.swiper.on('slideChangeTransitionEnd', () => {

      currentIndexSpan.innerHTML = this.$refs.mySwiper.swiper.activeIndex
    })

    const authData = localStorage.getItem('auth_data');
    if(authData) {
      this.auth_data = JSON.parse(authData)
    }

    // 进入自己的页面，则跳转到首页
    if(this.openid === (<any>this.auth_data).openid) {
      this.$router.replace('/home')
    }
  }

  async getBrowseMails(params) {
    let res = await this.api.getBrowseMails(params);
    if(res.code === "0") {
      this.userInfo = res.payload.user;
      this.borrowData = res.payload.mails;
      this.total = res.payload.mails.length
    }
  }

  //获取范围内的随机数
  randNum(minnum , maxnum){
    return Math.floor(minnum + Math.random() * (maxnum - minnum));
  }

  onReturnWrite() {
    this.$router.push({path:'/write/' + this.openid})
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
      title: '快来围观xxx（微信昵称）收到了什么匿名情书', // 分享标题
      link: conFig.host + '#/write/' + that.openid, // 分享链接
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
      desc: '快来围观xxx（微信昵称）收到了什么匿名情书',
      link: conFig.host + '#/write/'+ that.openid, // 分享链接
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
