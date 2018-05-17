
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './write.vue'

@Component({
  mixins: [template]
})
export default class Write extends Vue {
  params = {
    content: '',
    to_openid: ''
  }

  showBrandEgg = false;

  openid = '';

  showTips = false;
  tipText = '';

  async mounted() {
    this.openid = this.$route.params.openid;
    this.params.to_openid = this.$route.params.openid;
    const myOpenid = JSON.parse(localStorage.getItem('auth_data')).openid
    // 进入自己的页面，则跳转到首页
    if(this.openid === myOpenid) {
      this.$router.replace('/home')
    }
  }


  onSendOut() {
    if(this.params.content ==='') {
      this.showTips = true;
      this.tipText = '内容不能为空';
      setTimeout(() => {
        this.showTips = false;
      },1500);
    } else {
      this.postContent(this.params);
    }
  }

  // 发送信件
  async postContent(params) {
    let res = await this.api.postContent(params);
    if(res.code === "0") {
      this.$router.push({path:'/sendOut/'+ this.openid});
    } else {
      this.showTips = true;
      this.tipText = res.msg;
      setTimeout(() => {
        this.showTips = false;
      },1500);
    }
  }

  onReturnBorrow() {
    this.$router.push({path:'/borrow/'+this.openid})
  }
}
