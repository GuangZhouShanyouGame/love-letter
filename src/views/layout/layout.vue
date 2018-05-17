<template>
  <div class="layout-main">
    <div class="bgm-btn" v-show="showPlay" :class="{play: isPlay}" @click="playAudio"></div>
    <audio id="bgm_audio" src="http://jiangsu.sinaimg.cn/zt/s/yxqxwspds/mobile/bgmcut.mp3" controls autoplay="autoplay" loop style="display: none; width: 0; height: 0;"></audio>
    <router-view></router-view>
  </div>
</template>
<style src="./layout.scss" lang="scss"></style>
