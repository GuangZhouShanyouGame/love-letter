
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './myLoveLetter.vue'
import * as Clipboard from 'clipboard'

@Component({
  mixins: [template]
})
export default class MyLoveLetter extends Vue {
  showNoLetter = false;

  mails = [];
  mailsTotal = 0;

  swiperOption = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  showKeys = false;

  $refs:{
    mySwiper
  }

  async created() {
    this.getMails();
  }

  async mounted() {
    console.log(Clipboard)
  }

  async getMails() {
    let res = await this.api.getMails({});
    if(res.code === "0") {
      this.mails = res.payload.mails;
      this.mailsTotal = res.payload.mails.length;
      //this.$refs.mySwiper.swiper.slideTo(2, 1000, false)
    }
  }

  // 迈出这一步
  onStepOut() {
    // console.log(this.$refs.mySwiper.swiper.snapIndex)
    this.showKeys = true;
  }

  // 复制密钥
  fuzhi(){
    const clipboard = new Clipboard('.btn-fuzhi');

    clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      e.clearSelection();
    });

     clipboard.on('error', function(e) {
       console.error('Action:', e.action);
       console.error('Trigger:', e.trigger);
    });
  }
}
