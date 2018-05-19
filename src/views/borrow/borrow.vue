<template>
  <div class="borrow-wp">
    <div class="borrow-cont">
      <div class="borrow-bg">
        <div class="borrow-main">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(borrow,i) in borrowData" :key="i">
              <div class="borrow-info">
                <div class="borrow-info-main">
                  <div class="borrow-t">亲爱的 {{userInfo.nickname}}：</div>
                  <div class="borrow-h">
                    <div v-html="borrow.html"></div>
                  </div>
                  <div class="borrow-d">{{borrow.name}}</div>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>

        <div class="btns-wp">
          <div class="borrow-total">
            <span class="borrow-current-index"></span> / {{borrowData.length}}
          </div>
          <a href="javascript:;" class="btn-link write-btn" @click="onReturnWrite"></a>
          <a href="javascript:;" class="btn-link borrow-btn"></a>
          <a href="javascript:;" class="btn-link write-sendOut-btn" @click="onSendOut"></a>
        </div>

        <div class="letter-text"></div>

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
<style src="./borrow.scss" lang="scss" scoped></style>
