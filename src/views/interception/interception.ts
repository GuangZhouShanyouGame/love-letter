import Vue from 'components/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './interception.vue'

@Component({ mixins: [template] })
export default class Interception extends Vue {
    async mounted() {
        
    }
}