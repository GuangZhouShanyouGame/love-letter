<template>
  <div class="layout-main">
    <div class="bgm-btn" v-show="showPlay" :class="{play: isPlay}" @click="playAudio"></div>
    <audio id="bgm_audio" src="//24haowan-cdn.shanyougame.com/dingzhi/love-letter/bgm.mp3" controls autoplay="autoplay" loop style="display: none; width: 0; height: 0;"></audio>
    <router-view></router-view>
  </div>
</template>
<style src="./layout.scss" lang="scss"></style>
