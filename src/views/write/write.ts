
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './write.vue'
import wxapi from 'util/wxapi'
import conFig from 'util/config'

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
    wxapi.wxRegister(this.wxRegCallback);
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

  //[wxRegCallback 用于微信JS-SDK回调]
  wxRegCallback () {
    this.wxShareTimeline();
    this.wxShareAppMessage();
  }

  // 分享到朋友圈
  wxShareTimeline() {
    const that = this;
    let opstion = {
      title: wxapi.opstions.title, // 分享标题
      link: conFig.host + '#/write/' + that.openid, // 分享链接
      imgUrl: wxapi.opstions.imgUrl,// 分享图标
      success() {
        that.shares();
      },
      error() {
      }
    }
    wxapi.ShareTimeline(opstion);
  }

  // 分享给朋友
  wxShareAppMessage() {
    const that = this;
    let opstion = {
      title: wxapi.opstions.title, // 分享标题
      desc: wxapi.opstions.desc,
      link: conFig.host + '#/write/'+ that.openid, // 分享链接
      imgUrl: wxapi.opstions.imgUrl,// 分享图标
      success() {
        that.shares();
      },
      error() {}
    }
    wxapi.ShareAppMessage(opstion);
  }

  // 分享成功时调用
  async shares() {
    let res = await this.api.shares();
  }
}
