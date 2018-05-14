import Vue from 'components/base'
import {Component} from 'vue-property-decorator'
import template from './watchMovie.vue'

@Component({mixins: [template]})
export default class WatchMovie extends Vue {

  mail = {};
  async created() {
  }

  async mounted() {
    //this.getKeyMail();
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
