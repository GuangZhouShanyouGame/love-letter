
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './sendOut.vue'

@Component({
  mixins: [template]
})
export default class SendOut extends Vue {
  showBrandEgg = false;

  openid = '';

  async mounted() {
    this.openid = this.$route.params.openid;
  }
}
