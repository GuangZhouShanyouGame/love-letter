import Vue from 'components/base'
import {Component} from 'vue-property-decorator'
import template from './watchMovie.vue'
import wxapi from 'util/wxapi'
import conFig from 'util/config'
import util from 'util/index'

@Component({mixins: [template]})
export default class WatchMovie extends Vue {

  auth_data = {};

  keys = '';

  mail = {};

  showTicketFinish = false;
  buyTicketUrl = ''
  urlMap = {
    "bn": "http://h5web.yuekeyun.com/app/BONA_H5_PROD_S_MPS/version408/user/mycoupons?wapid=BONA_H5_PROD_S_MPS&data=%7B%7D",
    "default": "http://m.hengdafilm.com/app/HENGDA_H5_PROD_S_MPS/version408/location/index",
    "zy": "http://m.cfc.com.cn/g?_t=yx-own"
  }

  showTicket = false;
  // 博纳不显示按钮
  showTicketBtn = true;

  ticketcode = '';

  ticketInfo = {};

  showBrandEgg = false;

  ticketBg = ''

  ticketMap = {
    'bn': require("../../assets/images/ticket-bn.png"),
    'zy': require("../../assets/images/ticket-zy.png")
  }

  created() {
    util.handleInception.call(this)
  }

  async mounted() {
    wxapi.wxRegister(this.wxRegCallback);
    this.keys = this.$route.params.keys;

    const authData = localStorage.getItem('auth_data');
    if(authData !== null) {
      this.auth_data = JSON.parse(authData);
    }

    this.getKeyMail(this.keys);
  }

  // 获取信件
  async getKeyMail(keys) {
    let res = await this.api.getKeyMail({
      key: keys
    });
    if(res.code === "0") {
      this.mail = res.payload.mail;
    }
  }

  onWatchMovie() {
    this.getTicket({key: this.keys});
  }
  goTicekt(url) {
    window.location.href = url
  }
  //
  async getTicket(params) {
    let res = await this.api.getTicket(params).catch(res => {
      const data = res.err.data
      // 
      if (data.code === "1002") {
        this.showTicketFinish = true;
        if (res.payload.cid === 'bn') {
          this.showTicketBtn = false
        } else {
          this.showTicketBtn = true
        }
        this.buyTicketUrl = data.payload.url
      }
    });
    // const res = { "payload": { "cid": "bn", "film_code": "1989051770298830", "url": "http://m.hengdafilm.com/app/HENGDA_H5_PROD_S_MPS/version408/location/index?wapid=HENGDA_H5_PROD_S_MPS" }, "code": "0", "msg": "ok" }
    if(res.code === "0") {
      this.ticketInfo = res.payload;
      if(res.payload.cid === 'bn') {
        this.showTicketBtn = false
      } else {
        this.showTicketBtn = true
      }
      this.showTicket = true;
      this.ticketBg = this.ticketMap[res.payload.cid] || require('../../assets/images/tichet-hd.png')
    }

    
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
      title: '520给我寄出一封匿名情书，开始我们的故事吧', // 分享标题
      link: conFig.host + '#/write/' + JSON.parse(localStorage.getItem('auth_data')).openid, // 分享链接
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
      link: conFig.host + '#/write/' + JSON.parse(localStorage.getItem('auth_data')).openid, // 分享链接
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
