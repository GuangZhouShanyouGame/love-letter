
import Vue from 'components/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './layout.vue'
import wxapi from 'util/wxapi'
import * as cookie from 'cookie_js'

@Component({
  mixins: [template]
})
export default class Layout extends Vue {

  showPlay = true;
  isPlay = true;

  async created() {
  }

  async mounted() {
    wxapi.isweixin();
    this.pagePlayAudio();

    const auth_data = JSON.parse(cookie.cookie.get('auth_data'))
    this.getBoot({
      headimgurl: auth_data.headimgurl,
      nickname: auth_data.nickname
    })
  }

  @Watch('$route')
  onRouteChanged(val: string, oldVal: string) {
    this.pagePlayAudio();
  }

  async getBoot(params) {
    let res = await this.api.getBoot(params);
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
