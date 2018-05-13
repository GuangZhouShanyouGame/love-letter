
import Vue from 'components/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './layout.vue'

@Component({
  mixins: [template]
})
export default class Layout extends Vue {

  showPlay = true;
  isPlay = true;

  async created() {
    this.isweixin();
  }

  async mounted() {
    this.pagePlayAudio();
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

  @Watch('$route')
  onRouteChanged(val: string, oldVal: string) {
    this.pagePlayAudio();
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

  pagePlayAudio () {
    const audio = document.querySelector('#bgm_audio');

    if(this.$route.path === '/loading') {
      this.isPlay = false;
      this.showPlay = false;
      (<any>audio).pause();
    } else {
      this.isPlay = true;
      this.showPlay = true;
      (<any>audio).play();
    }
  }
}
