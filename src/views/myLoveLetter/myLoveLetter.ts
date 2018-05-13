
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './myLoveLetter.vue'

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

  async created() {
    this.getMails();
  }

  async getMails() {
    let res = await this.api.getMails({});
    if(res.code === "0") {
      this.mails = res.payload.mails;
      this.mailsTotal = res.payload.mails.length;
    }
  }
}
