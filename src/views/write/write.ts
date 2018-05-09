
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './write.vue'

@Component({
  mixins: [template]
})
export default class Write extends Vue {

}
