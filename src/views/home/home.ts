import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './home.vue'
import wxapi from 'util/wxapi'
import conFig from 'util/config'

@Component({
  mixins: [template],
  components: {}
})
export default class Home extends Vue {
  // async created() {
  //   // api example
  //   let res = await this.api.getPackage()
  //   console.log(res.content)
  // }

  showNoLetter = false;
  showShareTips = false;
  shareTipText = '';

  async mounted() {
    wxapi.wxRegister(this.wxRegCallback);
  }

  async getMails() {
    let res = await this.api.getMails({});
    if(res.code === "0") {
      if(res.payload.mails.length > 0) {
        this.$router.push({path:'/myLoveLetter'});
      } else {
        this.showNoLetter = true;
      }
    }
  }

  // 点击我的情书按钮
  onMails() {
    this.getMails();
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
      title: '为TA留下一封匿名情书', // 分享标题
      link: conFig.host + '#/write',      // 分享链接
      imgUrl: 'http://www.jzdlink.com/wordpress/wp-content/themes/wordpress_thems/images/lib/logo.png',// 分享图标
      success() {
        that.showNoLetter = false;
        setTimeout(() => {
          this.showShareTips = true;
          this.shareTipText = '分享成功'
        },1000);

        setTimeout(() => {
          this.showShareTips = false;
        },2500);
        that.shares();
      },
      error() {
        that.showNoLetter = false;
        setTimeout(() => {
          this.showShareTips = true;
          this.shareTipText = '分享失败'
        },1000);

        setTimeout(() => {
          this.showShareTips = false;
        },2500)
      }
    }
    wxapi.ShareTimeline(opstion);
  }

  // 分享给朋友
  wxShareAppMessage() {
    const that = this;
    let opstion = {
      title: '为TA留下一封匿名情书', // 分享标题
      desc: '开始你们的故事吧',
      link: conFig.host + '#/write',      // 分享链接
      imgUrl: 'http://www.jzdlink.com/wordpress/wp-content/themes/wordpress_thems/images/lib/logo.png',// 分享图标
      success() {
        that.showNoLetter = false;
        setTimeout(() => {
          this.showShareTips = true;
          this.shareTipText = '分享成功'
        },1000);

        setTimeout(() => {
          this.showShareTips = false;
        },2500);
        that.shares();
      },
      error() {
        that.showNoLetter = false;
        setTimeout(() => {
          this.showShareTips = true;
          this.shareTipText = '分享失败'
        },1000);

        setTimeout(() => {
          this.showShareTips = false;
        },2500)
      }
    }
    wxapi.ShareAppMessage(opstion);
  }

  // 分享成功时调用
  async shares() {
    let res = await this.api.shares();
  }
}

