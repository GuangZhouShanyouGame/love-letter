
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './layout.vue'

@Component({
  mixins: [template]
})
export default class Layout extends Vue {

  isPlay = true;

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
