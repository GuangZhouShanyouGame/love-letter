import Vue from 'components/base'
import {Component, Watch} from 'vue-property-decorator'
import template from './loading.vue'
import * as resLoader from '../../assets/js/resLoader.js'

@Component({mixins: [template]})
export default class Loading extends Vue {

  percent = {
    num: '0'
  };

  async created() {}

  async mounted() {
    const that = this;
    const loader = new resLoader({
      resources: [
        '../../assets/images/l_arrow.png',
        '../../assets/images/loading_projector.png',
        '../../assets/images/logo.png',
        '../../assets/images/movie_m.png',
        '../../assets/images/myletter_btn.png',
        '../../assets/images/paly_open.png',
        '../../assets/images/play_close.png',
        '../../assets/images/r_arrow.png',
        '../../assets/images/share_bg.png',
        '../../assets/images/shouye.jpg',
        '../../assets/images/watchMovie_btns.png'
      ],
      onStart: function (total) {
        console.log('start:' + total);
      },
      onProgress: function (current, total) {
        const percent = (current / total * 100).toFixed(0);
        that.percent.num = percent;
      },
      onComplete: function (total) {
        //alert('加载完毕:' + total + '个资源');
        that.$router.push({path:'/home'});
      }
    });

    loader.start();
  }
}
