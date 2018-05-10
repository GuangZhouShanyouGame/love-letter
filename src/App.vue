<template>
  <div id="app">
    <div class="bgm-btn" :class="{play: isPlay}" @click="playAudio"></div>
    <audio id="bgm_audio" src="http://jiangsu.sinaimg.cn/zt/s/yxqxwspds/mobile/bgmcut.mp3" autoplay="autoplay" loop="" style="display: none; width: 0; height: 0;"></audio>
    <transition name="fadeIn" enter-active-class="fadeInUp" leave-active-class="fadeOutUp">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="scss">
@import "base";

@keyframes myrotate {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-90deg);
  }

  50% {
    transform: rotate(-180deg);
  }

  75% {
    transform: rotate(-270deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  color: $color-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.bgm-btn {
  z-index: 8;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 30px;
  height: 30px;
  background-size: 100%;
  background-image: url(http://s3img.city.sina.com.cn/activity/common/large/9f9acca088ab3e67f12eb612bdd12c07.png);

  &.play {
    animation: myrotate 5s linear 0s infinite normal;
  }
}
</style>
<script>
export default {
  data () {
    return {
      transitionName: 'slide-left',
      isPlay: true
    }
  },

  methods: {
    playAudio() {
      const audio =document.querySelector('#bgm_audio');
      this.isPlay = !this.isPlay;

      if(this.isPlay) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
};
</script>
