<template>
  <div class="layout-main">
    <img src="../../assets/images/loading_01.png" alt="" style="display: none;">
    <div class="bgm-btn" v-show="showPlay" :class="{play: isPlay}" @click="playAudio"></div>
    <audio id="bgm_audio" src="http://jiangsu.sinaimg.cn/zt/s/yxqxwspds/mobile/bgmcut.mp3" autoplay="autoplay" loop="" style="display: none; width: 0; height: 0;"></audio>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<style src="./layout.scss" lang="scss" scoped></style>
