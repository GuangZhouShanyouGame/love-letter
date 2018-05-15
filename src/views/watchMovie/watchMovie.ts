import Vue from 'components/base'
import {Component} from 'vue-property-decorator'
import template from './watchMovie.vue'
import * as cookie from 'cookie_js'

@Component({mixins: [template]})
export default class WatchMovie extends Vue {

  auth_data = {};

  keys = '';

  mail = {};
  async created() {
  }

  async mounted() {
    this.keys = this.$route.params.keys;
    this.auth_data = JSON.parse(cookie.cookie.get('auth_data'));
    this.getKeyMail(this.keys);
  }

  // 获取信件
  async getKeyMail(keys) {
    let res = await this.api.getKeyMail({
      key: keys
    });
    if(res.code === "0") {
      this.mail = res.payload.mail;
    }
  }
}
