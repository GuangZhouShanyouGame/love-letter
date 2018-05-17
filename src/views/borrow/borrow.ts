
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './borrow.vue'

@Component({
  mixins: [template]
})
export default class Borrow extends Vue {

  params = {
    content: '',
    to_openid: ''
  }

  showBrandEgg = false;

  openid = '';

  swiperOption = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
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
      html:'<p>人生下来的时候都只有一半，</p><p>为了找到另一半而在人世间行走。</p><p>有的人很幸运，</p><p>很快就找到了。</p><p>而有人却要找一辈子。</p>',
      name: '《玻璃樽》'
    },
    {
      content: '我要你知道，这个世界上有一个人会永远等着你，无论是在什么时候，无论你在什么地方，反正你知道，总会有这么一个人的。',
      html:'<p>我要你知道，</p><p>这个世界上有一个人会永远等着你，</p><p>无论是在什么时候，</p><p>无论你在什么地方</p><p>反正你知道，</p><p>总会有这么一个人的。</p>',
      name: '《半生缘》'
    },
    {
      content: '不行！说好的是一辈子，少一年，一个月，一天，一个时辰，都不算是一辈子！',
      html:'<p>不行！</p><p>说好的是一辈子，</p><p>少一年，</p><p>一个月，</p><p>一天，</p><p>一个时辰，</p><p>都不算是一辈子！</p>',
      name: '《霸王别姬》'
    },
    {
      content: '1.	柯景腾说：“我发现我错了，原来，当你真的非常非常喜欢一个女孩，当她有人疼，有人爱，你会真心真意的祝福她，永远幸福快乐。”',
      html:'<p>柯景腾说：</p><p>“我发现我错了，</p><p>原来，</p><p>当你真的非常非常喜欢一个女孩，</p><p>当她有人疼，</p><p>有人爱，</p><p>你会真心真意的祝福她，</p><p>永远幸福快乐。</p>',
      name: ''
    },
    {
      content: '我爱你不是因为你是谁，而是我在你面前可以是谁。',
      html:'<p>我爱你不是因为你是谁，</p><p>而是我在你面前可以是谁。</p>',
      name: '《剪刀手爱德华》'
    },
    {
      content: '有的人浅薄，有的人金玉其表败絮其中。有一天 你会遇到一个彩虹般绚烂的人，当你遇到这个人后，会觉得其他人都只是浮云而已。',
      html:'<p>有的人浅薄，</p><p>有的人金玉其表败絮其中。</p><p>有一天 你会遇到一个彩虹般绚烂的人，</p><p>当你遇到这个人后,</p><p>会觉得其他人都只是浮云而已。</p>',
      name: '《怦然心动》'
    },
    {
      content: '如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。如果非要在这份爱上加上一个期限， 我希望是…一万年。',
      html:'<p>如果上天能够给我一个再来一次的机会，</p><p>我会对那个女孩子说三个字：</p><p>我爱你。</p><p>如果非要在这份爱上加上一个期限，</p><p>我希望是…一万年。</p>',
      name: '《大话西游》'
    },
    {
      content: '我知道有一天，他会在一个万众瞩目的情况下出现，身披金甲圣衣，脚踏七色彩云来娶我。',
      html:'<p>我知道有一天，</p><p>他会在一个万众瞩目的情况下出现，</p><p>身披金甲圣衣，</p><p>脚踏七色彩云来娶我。</p>',
      name: '《大话西游》'
    },
    {
      content: '世界上最遥远的距离不是生和死，而是站在你面前却不能说：“我爱你”',
      html:'<p>世界上最遥远的距离不是生和死，</p><p>而是站在你面前却不能说：“我爱你”</p>',
      name: '《星愿》'
    },
    {
      content: '你在我旁边，只打了个照面，五月的晴天，闪了电。',
      html:'<p>你在我旁边，</p><p>只打了个照面，</p><p>五月的晴天，</p><p>闪了电。</p>',
      name: '《流年》'
    },
    {
      content: '故事平淡但当中有你，已经足够。',
      html:'<p>故事平淡但当中有你，</p><p>已经足够。</p>',
      name: '《你的名字我的姓氏》'
    },
    {
      content: '你留下来或者我跟你走。',
      html:'<p>你留下来或者我跟你走。</p>',
      name: '《海角七号》'
    },
    {
      content: '除了喜欢你，我什么都做不好。',
      html:'<p>除了喜欢你，</p><p>我什么都做不好。</p>',
      name: '《假如爱有天意》'
    },
    {
      content: '我忍不住，我爱你。',
      html:'<p>我忍不住，</p><p>我爱你。</p>',
      name: '《阿甘正传》'
    },
    {
      content: '一生至少该有一次，为了某个人而忘了自己，不求有结果，不求同行，不求曾经拥有，甚至不求你爱我。只求在我最美的年华里，遇到你。',
      html:'<p>一生至少该有一次，</p><p>为了某个人而忘了自己，</p><p>不求有结果，</p><p>不求同行，</p><p>不求曾经拥有，</p><p>甚至不求你爱我。</p><p>只求在我最美的年华里，</p><p>遇到你。</p>',
      name: '《恋恋笔记本》'
    },
    {
      content: '感谢上天让我遇到你。',
      html:'<p>感谢上天让我遇到你。</p>',
      name: '《怦然心动》'
    },
    {
      content: '我在最好的时候遇见你，是我的运气。',
      html:'<p>我在最好的时候遇见你，</p><p>是我的运气。</p>',
      name: '《一代宗师》'
    },
    {
      content: '没有你，良辰美景可与何人说？',
      html:'<p>没有你，</p><p>良辰美景可与何人说？</p>',
      name: '《天使爱美丽》'
    },
    {
      content: '不管你在世界的什么地方，我一定会再一次与你相遇。',
      html:'<p>不管你在世界的什么地方，</p><p>我一定会再一次与你相遇。</p>',
      name: '《你的名字》'
    },
    {
      content: '回头啊，回头看看我。',
      html:'<p>回头啊，</p><p>回头看看我。</p>',
      name: '《南方与北方》'
    },
    {
      content: '你想要什么，我全都给你买。',
      html:'<p>你想要什么，</p><p>我全都给你买。</p>',
      name: '《请回答1988》'
    },
    {
      content: '一次就好，我带你去看天荒地老。',
      html:'<p>一次就好，</p><p>我带你去看天荒地老。</p>',
      name: '《夏洛特烦恼》'
    },
    {
      content: '在有生的瞬间能遇到你，竟花光所有运气。',
      html:'<p>在有生的瞬间能遇到你，</p><p>竟花光所有运气。</p>',
      name: '《明年今日》'
    },
    {
      content: '我想就这样牵着你的手不放开，爱可不可以简简单单没有伤害。',
      html:'<p>我想就这样牵着你的手不放开，</p><p>爱可不可以简简单单没有伤害。</p>',
      name: '《简单爱》'
    },
    {
      content: '我遇见你，是最美丽的意外。',
      html:'<p>我遇见你，</p><p>是最美丽的意外。</p>',
      name: '《遇见》'
    },
    {
      content: '天青色在等雨，而我在等你。',
      html:'<p>天青色在等雨，</p><p>而我在等你。</p>',
      name: '《青花瓷》'
    },
    {
      content: '看不见你的笑我怎么睡得着。',
      html:'<p>看不见你的笑我怎么睡得着。</p>',
      name: '《彩虹》'
    },
    {
      content: '我说今晚月光那么美，你说是的。',
      html:'<p>我说今晚月光那么美，</p><p>你说是的。</p>',
      name: '《我说今晚月光那么美，你说是的》'
    },
    {
      content: '我说今晚月光那么美，你说是的。',
      html:'<p>我说今晚月光那么美，</p><p>你说是的。</p>',
      name: '《我说今晚月光那么美，你说是的》'
    },
    {
      content: '我在忧愁时想你，就像在冬季想太阳；我在快乐时想你，就像在骄阳下想树荫。',
      html:'<p>我在忧愁时想你，</p><p>就像在冬季想太阳；</p><p>我在快乐时想你，</p><p>就像在骄阳下想树荫。</p>',
      name: ''
    },
    {
      content: '约吗？',
      html:'<p>约吗？</p>',
      name: ''
    },
    {
      content: '春风再美也比不上你的笑，没见过你的人不会明了。',
      html:'<p>春风再美也比不上你的笑，</p><p>没见过你的人不会明了。</p>',
      name: ''
    },
    {
      content: '余生请你多指教。',
      html:'<p>余生请你多指教。</p>',
      name: ''
    },
    {
      content: '我给你买皮肤。',
      html:'<p>我给你买皮肤。</p>',
      name: ''
    },
    {
      content: '你是如此的胖！以至于把我的心全部塞满。',
      html:'<p>你是如此的胖！</p><p>以至于把我的心全部塞满。</p>',
      name: ''
    },
    {
      content: '我走过最长的路就是你的套路。',
      html:'<p>我走过最长的路就是你的套路。</p>',
      name: ''
    },
    {
      content: '你知道为什么现在犯罪率这么高吗？因为你美丽的五官是是众人犯罪的开端。',
      html:'<p>你知道为什么现在犯罪率这么高吗？</p><p>因为你美丽的五官是是众人犯罪的开端。</p>',
      name: ''
    },
    {
      content: '你知道我是什么血型么？我是你的理想型。',
      html:'<p>你知道我是什么血型么？</p><p>我是你的理想型。</p>',
      name: ''
    },
    {
      content: '你有打火机么？没有。那你是怎么点燃我的心。',
      html:'<p>你有打火机么？</p><p>没有。</p><p>那你是怎么点燃我的心。</p>',
      name: ''
    },
    {
      content: '你会喜欢我吗？不会。那我教你啊！',
      html:'<p>你会喜欢我吗？</p><p>不会。</p><p>那我教你啊！</p>',
      name: ''
    },
    {
      content: '别人都说你的脸很圆，但我觉得你的脸还蛮方的。为什么？不然怎么这么正。',
      html:'<p>别人都说你的脸很圆，</p><p>但我觉得你的脸还蛮方的。</p><p>为什么？不然怎么这么正。</p>',
      name: ''
    },
    {
      content: '最近天气很冷你知道要怎么取暖吗？怎么取暖？我不知道，但我知道怎么娶你。',
      html:'<p>最近天气很冷你知道要怎么取暖吗？</p><p>怎么取暖？</p><p>我不知道，</p><p>但我知道怎么娶你。</p>',
      name: ''
    },
    {
      content: '我最近学会一个技能，我只要看你的外表就知道你是什么星座，我觉得你是：上帝的杰作。',
      html:'<p>我最近学会一个技能，</p><p>我只要看你的外表就知道你是什么星座，</p><p>我觉得你是：上帝的杰作。</p>',
      name: ''
    },
    {
      content: '过年我都不收红包了。为什么？因为我只收你这个小宝宝。',
      html:'<p>过年我都不收红包了。</p><p>为什么？</p><p>因为我只收你这个小宝宝。</p>',
      name: ''
    },
  ];

  total = 0;

  showTips = false;
  tipText = '';

  async mounted() {
    this.openid = this.$route.params.openid;
    this.params.to_openid = this.$route.params.openid;

    this.total = this.borrowData.length;
    const num = this.randNum(0,this.total);
    this.$refs.mySwiper.swiper.slideTo(num, 0, false)

    const t = document.body;
    // t.addEventListener('touchstart', function (e) {
    //    console.log('aaa')
    //    e.preventDefault()
    // })

    t.addEventListener('touchmove', function(e) {
      console.log('bbbb')
      e.preventDefault()
    })
    // 用vue变量绑定dom会卡顿，应该是swiper的bug。暂时没有更快捷优雅的办法解决
    const currentIndexSpan = document.querySelector('.borrow-current-index')
    currentIndexSpan.innerHTML = this.$refs.mySwiper.swiper.activeIndex
    this.$refs.mySwiper.swiper.on('slideChangeTransitionEnd', () => {
      
      currentIndexSpan.innerHTML = this.$refs.mySwiper.swiper.activeIndex
    })
  }

  //获取范围内的随机数
  randNum(minnum , maxnum){
    return Math.floor(minnum + Math.random() * (maxnum - minnum));
  }

  onSendOut() {
    const item = this.$refs.mySwiper.swiper.snapIndex;
    this.params.content = this.borrowData[item].content;
    this.postContent(this.params);
  }

  // 发送信件
  async postContent(params) {
    let res = await this.api.postContent(params);
    if(res.code === "0") {
      this.$router.push({path:'/sendOut/'+ this.openid});
    } else {
      this.showTips = true;
      this.tipText = res.msg;
      setTimeout(() => {
        this.showTips = false;
      },1500);
    }
  }

  onReturnWrite() {
    this.$router.push({path:'/write/' + this.openid})
  }
}
