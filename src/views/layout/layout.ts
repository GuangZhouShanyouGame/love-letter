
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './layout.vue'

@Component({
  mixins: [template]
})
export default class Layout extends Vue {

  isPlay = true;

  async created() {
    this.isweixin();
  }

  // 判断是否是微信浏览器
  isweixin() {
    const ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) === null) {
      console.log('这不是微信浏览器')
      return false;
    } else {
      if(ua.match(/MicroMessenger/i)[0] === 'micromessenger'){
        console.log('这是微信浏览器')
        return true;
      } else {
        console.log('这不是微信浏览器')
        return false;
      }
    }
  }

  playAudio() {
    const audio = document.querySelector('#bgm_audio');
    this.isPlay = !this.isPlay;

    if(this.isPlay) {
      (<any>audio).play();
    } else {
      (<any>audio).pause();
    }
  }
}
