<template>
  <div class="layout-main">
    <div class="bgm-btn" :class="{play: isPlay}" @click="playAudio"></div>
    <audio id="bgm_audio" src="http://jiangsu.sinaimg.cn/zt/s/yxqxwspds/mobile/bgmcut.mp3" autoplay="autoplay" loop="" style="display: none; width: 0; height: 0;"></audio>
    <transition name="fadeIn" enter-active-class="fadeInUp" leave-active-class="fadeOutUp">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style src="./layout.scss" lang="scss" scoped></style>
