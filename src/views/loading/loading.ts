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
        '/love-letter/dist/qa/static/img/l_arrow.png',
        '/love-letter/dist/qa/static/img/loading_projector.png',
        '/love-letter/dist/qa/static/img/logo.png',
        '/love-letter/dist/qa/static/img/movie_m.png',
        '/love-letter/dist/qa/static/img/myletter_btn.png',
        '/love-letter/dist/qa/static/img/paly_open.png',
        '/love-letter/dist/qa/static/img/play_close.png',
        '/love-letter/dist/qa/static/img/r_arrow.png',
        '/love-letter/dist/qa/static/img/share_bg.png',
        '/love-letter/dist/qa/static/img/shouye.jpg',
        '/love-letter/dist/qa/static/img/watchMovie_btns.png'
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
