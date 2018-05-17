import Vue from 'components/base'
import {Component, Watch} from 'vue-property-decorator'
import template from './loading.vue'
import * as resLoader from '../../assets/js/resLoader.js'
import wxapi from 'util/wxapi'
import conFig from 'util/config'

@Component({mixins: [template]})
export default class Loading extends Vue {

  percent = {
    num: '0'
  };

  async created() {}

  async mounted() {
    wxapi.wxRegister(this.wxRegCallback);
    const that = this;
    const conFig = {
      host: 'http://24haowan-cdn.shanyougame.com/dingzhi/love-letter/dist/qa'
    };
    const loader = new resLoader({
      resources: [
        conFig.host + '/static/img/coupon.png',
        conFig.host + '/static/img/key_bg.png',
        conFig.host + '/static/img/l_arrow.png',
        conFig.host + '/static/img/loading_01.png',
        conFig.host + '/static/img/loading_bg.png',
        conFig.host + '/static/img/mailbox.png',
        conFig.host + '/static/img/logo.png',
        conFig.host + '/static/img/myletter_bottom_bg.png',
        conFig.host + '/static/img/myletter_top_bg.png',
        conFig.host + '/static/img/myletter_xinzhi.png',
        conFig.host + '/static/img/plain.png',
        conFig.host + '/static/img/play_close.png',
        conFig.host + '/static/img/play_open.png',
        conFig.host + '/static/img/qr-code.png',
        conFig.host + '/static/img/r_arrow.png',
        conFig.host + '/static/img/return_home.png',
        conFig.host + '/static/img/sendOut_bg.png',
        conFig.host + '/static/img/sendOut_bottom_bg.png',
        conFig.host + '/static/img/sendOut_btn.png',
        conFig.host + '/static/img/sendOut_text.png',
        conFig.host + '/static/img/sendOut_top_bg.png',
        conFig.host + '/static/img/shouye_bg_01.png',
        conFig.host + '/static/img/shouye_bg.png',
        conFig.host + '/static/img/shouye_myLetter.png',
        conFig.host + '/static/img/shouye_share.png',
        conFig.host + '/static/img/shouye_title.png',
        conFig.host + '/static/img/shouye_xinfeng.png',
        conFig.host + '/static/img/shoye_bg_01.png',
        conFig.host + '/static/img/watchMovie_btn.png',
        conFig.host + '/static/img/write_borrow_btn_select.png',
        conFig.host + '/static/img/write_borrow_btn.png',
        conFig.host + '/static/img/write_bottom_bg.png',
        conFig.host + '/static/img/write_btn_select.png',
        conFig.host + '/static/img/write_btn.png',
        conFig.host + '/static/img/write_top_bg.png',
        conFig.host + '/static/img/write_xinzhi.png',
        conFig.host + '/static/img/write-again.png',
        conFig.host + '/static/img/write-sendOut.png',
        conFig.host + '/static/img/flower_heart.png',
        conFig.host + '/static/img/ticket_finish.png',
        conFig.host + '/static/img/ticket.png',
        conFig.host + '/static/img/brand_egg.png',
        // 预加载字体，为了修复首次进入到借情书页时再加载字体带来的卡顿问题，需要测试
        conFig.host + '/static/fonts/NotoSerifCJKsc-SemiBold.otf'
      ],
      onStart: function (total) {
        console.log('start:' + total);
      },
      onProgress: function (current, total) {
        const percent = (current / total * 100).toFixed(0);
        that.percent.num = percent;
      },
      onComplete: function (total) {
        //alert('加载完毕:' + total + '个资源');
        // that.$router.push({path:'/home'});
        const currentRouter = localStorage.getItem('router')
        localStorage.removeItem('router');
        that.$router.push(currentRouter || '/home');
      }
    });

    loader.start();
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
