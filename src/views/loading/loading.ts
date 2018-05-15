import Vue from 'components/base'
import {Component, Watch} from 'vue-property-decorator'
import template from './loading.vue'
import * as resLoader from '../../assets/js/resLoader.js'
import conFig from 'util/config'

@Component({mixins: [template]})
export default class Loading extends Vue {

  percent = {
    num: '0'
  };

  async created() {}

  async mounted() {
    const that = this;
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
        conFig.host + '/static/img/flower_heart.png'
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
        that.$router.push({path:'/home'});
      }
    });

    loader.start();
  }
}
