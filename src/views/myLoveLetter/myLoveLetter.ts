
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './myLoveLetter.vue'

@Component({
  mixins: [template]
})
export default class MyLoveLetter extends Vue {
  showNoLetter = false;
}
