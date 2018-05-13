import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './home.vue'
import Hello from 'components/hello'

@Component({
  mixins: [template],
  components: {
    Hello
  }
})
export default class Home extends Vue {
  // async created() {
  //   // api example
  //   let res = await this.api.getPackage()
  //   console.log(res.content)
  // }

  showNoLetter = false;

  async getMails() {
    let res = await this.api.getMails({});
    if(res.code === "0") {
      if(res.payload.mails.length > 0) {
        this.$router.push({path:'/myLoveLetter'});
      }
    }
  }

  // 点击我的情书按钮
  onMails() {
    this.getMails();
  }
}

