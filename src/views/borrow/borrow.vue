<template>
  <div class="borrow-wp">
    <div class="borrow-cont">
      <div class="borrow-bg">
        <div class="borrow-main">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(borrow,i) in borrowData" :key="i">
              <div class="borrow-info">
                <div class="borrow-h">
                  <div v-html="borrow.html"></div>
                </div>
                <div class="borrow-d">{{borrow.name}}</div>
              </div>
              <div class="borrow-total">
                {{i+1}} / {{total}}
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>

          <div class="btns-wp">
            <a :href="'#/write/'+openid" class="btn-link write-btn"></a>
            <a :href="'#/borrow/'+openid" class="btn-link borrow-btn"></a>
            <a href="javascript:;" class="btn-link write-sendOut-btn" @click="onSendOut"></a>
          </div>

          <div class="letter-text"></div>

          <div class="logo-wp">
            <img class="logo-img" src="../../assets/images/logo.png" alt="中国巨幕">
          </div>
        </div>
      </div>
    </div>

    <div class="tips" v-if="showTips">{{tipText}}</div>
  </div>
</template>
<style src="./borrow.scss" lang="scss" scoped></style>
