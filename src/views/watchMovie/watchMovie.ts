
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './watchMovie.vue'

@Component({
  mixins: [template]
})
export default class WatchMovie extends Vue {

}
