
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './loading.vue'

@Component({
  mixins: [template]
})
export default class Loading extends Vue {

}
