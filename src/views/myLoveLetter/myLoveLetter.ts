
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './myLoveLetter.vue'
import * as Clipboard from 'clipboard'
import wxapi from 'util/wxapi'
import conFig from 'util/config'
import util from 'util/index'
import sensitiveWordsText from 'util/sensitiveWords'
// import * as cookie from 'cookie_js'

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
    },
    loop: true
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
    util.handleInception.call(this)
    this.getMails();
  }
  async mounted() {



    const authData = localStorage.getItem('auth_data');

    if(authData !== null) {
      this.auth_data = JSON.parse(authData);
    }
    wxapi.wxRegister(this.wxRegCallback);

    // 用vue变量绑定dom会卡顿，应该是swiper的bug。暂时没有更快捷优雅的办法解决
    const currentIndexSpan = document.querySelector('.borrow-current-index')
    currentIndexSpan.innerHTML = this.$refs.mySwiper.swiper.activeIndex + 1;


    this.$refs.mySwiper.swiper.on('slideChangeTransitionEnd', () => {

      currentIndexSpan.innerHTML = this.$refs.mySwiper.swiper.activeIndex + 1;



    })
  }

  // 获取信件列表
  async getMails() {
    let res = await this.api.getMails({});
    if(res.code === "0") {
      this.mails = res.payload.mails;
      this.mailsTotal = res.payload.mails.length;
      this.mails.forEach((v,i) => {
        const isSensitive = sensitiveWordsText.find((word) => {
          return v.content.indexOf(word) > -1;
        });
        if(isSensitive) {
          v.content = v.content.replace(isSensitive, '*****')
        }

      })
      
    }

        setTimeout(()=>{
            const qrcodeElement = Array.from(document.getElementsByClassName('letter-info-qrcode'));
            const size = parseFloat(document.documentElement.style.fontSize);
            console.log(size)
            qrcodeElement.forEach(v=>{
              const qrcode = new QRCode(v, {
                text: conFig.host + '#/borrow/' + JSON.parse(localStorage.getItem('auth_data')).openid,
                width: size*1.8,
                height: size*1.8,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.L
              });
            })

        },0)

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

    clipboard.on('success', e => {
      e.clearSelection();
      this.showShareTips = true;
      this.shareTipText = '复制成功';
      setTimeout(() => {
        this.showShareTips = false;
      }, 3000);
      _hmt.push(['_trackEvent', 'secret', 'secret']);
    });
     clipboard.on('error', function(e) {});
  }

  touchQr() {
    _hmt.push(['_trackEvent', 'qrcode', 'qrcode']);
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

  onReturnHome() {
    this.$router.push({path: '/home'});
  }
}
