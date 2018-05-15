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
              <a :href="'#/write/'+openid" class="btn-link write-again"></a>
            </div>
            <div>
              <a href="#/home" class="btn-link return-home"></a>
            </div>
          </div>
          <div class="logo-wp">
            <img class="logo-img" src="../../assets/images/logo.png" @click="showBrandEgg = true;" alt="中国巨幕">
          </div>
        </div>
      </div>
    </div>

    <div class="brand-egg" v-if="showBrandEgg" @click="showBrandEgg = false;">
      <div class="brand-egg-cont"></div>
    </div>
  </div>
</template>
<style src="./sendOut.scss" lang="scss" scoped></style>
