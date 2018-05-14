
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './borrow.vue'

@Component({
  mixins: [template]
})
export default class Borrow extends Vue {
  swiperOption = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  $refs:{
    mySwiper
  }
}
