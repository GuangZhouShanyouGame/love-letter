<template>
  <div class="home-wp">
    <div class="home-bg">
      <img class="home-title" src="../../assets/images/shouye_title.png" alt="给TA寄出匿名情书，开始你们的故事吧">
      <img class="home-xinfeng" src="../../assets/images/shouye_xinfeng2.png" alt="给TA寄出匿名情书，开始你们的故事吧">
      <div class="home-link" @click="onMails">
        <div class="home-myletter" alt="给TA寄出匿名情书，开始你们的故事吧"></div>
      </div>
    </div>
    <div class="share-cont" v-if="showNoLetter" @click="showNoLetter = false;">
      <img src="../../assets/images/shouye_share.png" class="share-img" alt="分享">
    </div>

    <div class="share-tips" v-if="showShareTips">{{shareTipText}}</div>
  </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
