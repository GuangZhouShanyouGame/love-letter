
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './borrow.vue'

@Component({
  mixins: [template]
})
export default class Borrow extends Vue {
  swiperOption = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  $refs:{
    mySwiper
  }

  borrowData = [
    {
      content: '如果，我多一张船票，你会不会跟我一起走？',
      html:'<p>如果，</p><p>我多一张船票，</p><p>你会不会跟我一起走？</p>',
      name: '《花样年华》'
    },
    {
      content: '我养你啊！',
      html:'<p>我养你啊！</p>',
      name: '《喜剧之王》'
    },
    {
      content: '不如我们从头来过',
      html:'<p>不如我们从头来过</p>',
      name: '《春光乍泄》'
    },
    {
      content: '你不要对我这么好，你对我这么好、要是有一天你对我不好了，我会很伤心。',
      html:'<p>你不要对我这么好，</p><p>你对我这么好、</p><p>要是有一天你对我不好了，</p><p>我会很伤心。</p>',
      name: '《夏日么么茶》'
    },
    {
      content: '不知道从什么时候开始，在什么东西上面都有个日期，秋刀鱼会过期，肉罐头会过期，连保鲜纸都会过期，我开始怀疑，在这个世界上，还有什么东西是不会过期的？',
      html:'<p>不知道从什么时候开始，</p><p>在什么东西上面都有个日期，</p><p>秋刀鱼会过期，</p><p>肉罐头会过期，</p><p>连保鲜纸都会过期，</p><p>我开始怀疑，</p><p>在这个世界上，</p><p>还有什么东西是不会过期的？</p>',
      name: '《重庆森林》'
    },
    {
      content: '生命中充满了巧合，两条平行线也会有相交的一天。',
      html:'<p>生命中充满了巧合，</p><p>两条平行线也会有相交的一天。</p>',
      name: '《向左走向右走》'
    },
    {
      content: '我不管你是男是女，我只知道我好中意你。',
      html:'<p>我不管你是男是女，</p><p>我只知道我好中意你。</p>',
      name: '《金枝玉叶》'
    },
    {
      content: '我手上的爱情线、生命线和事业线，都是你的名字拼成的。',
      html:'<p>我手上的爱情线、</p><p>生命线和事业线，</p><p>都是你的名字拼成的。</p>',
      name: '《玻璃之城》'
    },
    {
      content: '就在看到你的那一刻，我心动了。',
      html:'<p>就在看到你的那一刻，</p><p>我心动了。</p>',
      name: '《心动》'
    },
    {
      content: '人生下来的时候都只有一半，为了找到另一半而在人世间行走。有的人很幸运，很快就找到了。而有人却要找一辈子。',
      html:'<p>人生下来的时候都只有一半，</p><p>为了找到另一半而在人世间行走。</p><p>有的人很幸运，</p>',
      name: '《玻璃樽》'
    },
  ]
}
