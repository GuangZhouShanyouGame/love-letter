<template>
  <div class="sendOut-wp">
    <div class="sendOut-main">
      <div class="sendOut-bg">
        <div class="sendOut-mailbox">
          <img src="../../assets/images/plain.png" class="plain" alt="爱情邮箱">
        </div>
        <div class="sendOut-cont">
          <div class="btns-wp">
            <div>
              <a href="javascript:;" class="btn-link write-again" @click="onReturnHome"></a>
            </div>
            <div>
              <a href="javascript:;" class="btn-link return-home" @click="onShowShare"></a>
            </div>
          </div>
          <div class="logo-wp">
            <img class="logo-img" src="../../assets/images/logo.png" @click="showBrandEgg = true;" alt="中国巨幕">
          </div>
        </div>
      </div>
    </div>
    <div class="share-cont" v-if="showNoLetter" @click="showNoLetter = false;">
      <img src="../../assets/images/shouye_share.png" class="share-img" alt="分享">
    </div>
  </div>
</template>
<style src="./sendOut.scss" lang="scss" scoped></style>
