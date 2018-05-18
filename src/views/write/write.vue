<template>
  <div class="write-wp">
    <div class="write-cont">
      <div class="write-bg">
        <div class="write-main">
          <div class="write-info">
            <textarea v-model="params.content" class="write-textarea" maxlength="80" placeholder="点击输入你的匿名情书(80字以内)"></textarea>
          </div>
        </div>
        <div class="btns-wp">
          <a href="javascript:;" class="btn-link write-btn"></a>
          <a href="javascript:;" class="btn-link borrow-btn" @click="onReturnBorrow"></a>
          <a href="javascript:;" class="btn-link write-sendOut-btn" @click="onSendOut"></a>
        </div>
        <div></div>
        <div class="logo-wp">
          <img class="logo-img" src="../../assets/images/logo.png" @click="showBrandEgg = true;" alt="中国巨幕">
        </div>
      </div>
    </div>

    <div class="tips" v-if="showTips">{{tipText}}</div>

    <div class="brand-egg" v-if="showBrandEgg" @click="showBrandEgg = false;">
      <div class="brand-egg-cont"></div>
    </div>
  </div>
</template>
<style src="./write.scss" lang="scss" scoped></style>
