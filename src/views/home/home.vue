<template>
  <div class="home-wp">
    <div class="rule" @click="showRule = true"></div>
    <div class="home-bg">
      <div class="home-title" alt="给TA寄出匿名情书，开始你们的故事吧"></div>
      <div class="home-xinfeng" @click="showEgg" alt="给TA寄出匿名情书，开始你们的故事吧"></div>
      <div class="home-link">
        <div class="home-myletter" @click="onMails" alt="给TA寄出匿名情书，开始你们的故事吧"></div>
        <div class="home-collect" @click="collect"></div>
      </div>
    </div>
    <div class="share-cont" v-if="showNoLetter" @click="showNoLetter = false;">
      <img src="../../assets/images/shouye_share.png" class="share-img" alt="分享">
    </div>

    <div class="share-tips" v-if="showShareTips">{{shareTipText}}</div>
    <div class="share-first-letter" v-if="myFirstLetter">
      <div class="first-close" @click="myFirstLetter = false"></div>
      <div class="first-mail"></div>
      <div class="first-text"></div>
      <div class="go-first-letter" @click="onMails"></div>
    </div>
    <div class="tips-text" v-if="showTextTips">未收到情书</div>
    <div class="rule-detial" v-show="showRule" @click="showRule = false"></div>
    <div class="brand-egg" v-if="showBrandEgg" @click="showBrandEgg = false;">
      <div class="brand-egg-cont"></div>
    </div>
  </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
