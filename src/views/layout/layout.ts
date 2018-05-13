
import Vue from 'components/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './layout.vue'
import wxapi from 'util/wxapi'

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
