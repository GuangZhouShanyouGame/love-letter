import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './home.vue'
import wxapi from 'util/wxapi'

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

  async mounted() {
    wxapi.wxRegister(this.wxRegCallback);
  }

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

  //[wxRegCallback 用于微信JS-SDK回调]
  wxRegCallback () {
    this.wxShareTimeline()
  }

  // 分享到朋友圈
  wxShareTimeline() {
    let opstion = {
      title: '胡小呆&曹小萌的情侣博客', // 分享标题
      link: 'http://www.jzdlink.com',      // 分享链接
      imgUrl: 'http://www.jzdlink.com/wordpress/wp-content/themes/wordpress_thems/images/lib/logo.png',// 分享图标
      success() {
        alert('分享成功')
      },
      error() {
        alert('分享失败')
      }
    }
    wxapi.ShareTimeline(opstion);
  }
}

