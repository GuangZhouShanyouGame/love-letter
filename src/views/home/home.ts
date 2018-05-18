import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './home.vue'
import wxapi from 'util/wxapi'
import conFig from 'util/config'
import util from 'util/index'
// import * as cookie from 'cookie_js'

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

  auth_data = {};

  showNoLetter = false;
  showShareTips = false;
  shareTipText = '';

  myLetterNum = 0;

  shareTimelineOpstion = {
    title: '为TA寄出一封匿名情书，开始你们的故事吧', // 分享标题
    link: conFig.host, // 分享链接
  }

  shareAppMessageOpstion = {
    title: '为TA寄出一封匿名情书', // 分享标题
    desc: '520给我寄出一封匿名情书，开始我们的故事吧',
    link: conFig.host, // 分享链接
  }
  created() {
    util.handleInception.call(this)
  }
  async mounted() {
    const authData = localStorage.getItem('auth_data');

    if(authData !== null) {
      this.auth_data = JSON.parse(authData);
    }

    this.getMails();
  }

  async getMails() {
    let res = await this.api.getMails({});
    if(res.code === "0") {
      if(res.payload.mails.length > 0) {
        this.myLetterNum = res.payload.mails.length;
      } else {
        this.myLetterNum = 0;

        this.shareTimelineOpstion = {
          title: '快来围观' + (<any>this.auth_data).nickname + '收到了什么匿名情书',
          link: conFig.host + '#/write/' + (<any>this.auth_data).openid
        }

        this.shareAppMessageOpstion = {
          title: '为TA寄出一封匿名情书', // 分享标题
          desc: '快来围观'+ (<any>this.auth_data).nickname +'收到了什么匿名情书',
          link: conFig.host + '#/write/'+ (<any>this.auth_data).openid, // 分享链接
        }
      }
    }
    wxapi.wxRegister(this.wxRegCallback);
  }

  // 点击我的情书按钮
  onMails() {
    if(this.myLetterNum === 0) {
      this.showNoLetter = true;
    } else {
      this.$router.push({path:'/myLoveLetter'});
    }
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
      title: that.shareTimelineOpstion.title, // 分享标题
      link: that.shareTimelineOpstion.link, // 分享链接
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
      title: that.shareAppMessageOpstion.title, // 分享标题
      desc: that.shareAppMessageOpstion.desc,
      link: that.shareAppMessageOpstion.link, // 分享链接
      imgUrl: wxapi.opstions.imgUrl,// 分享图标
      success() {
        that.shares();
      },
      error() {
      }
    }
    wxapi.ShareAppMessage(opstion);
  }

  // 分享成功时调用
  async shares() {
    let res = await this.api.shares();
  }
}

