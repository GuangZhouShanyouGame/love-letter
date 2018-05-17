<template>
  <div class="myLoveLetter-wp">
    <div class="myLoveLetter-cont">
      <div class="myLoveLetter-bg">
        <div class="myLoveLetter-main">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(mail,i) in mails" :key="i">
              <div class="letter-info">
                <div class="wm">亲爱的{{auth_data.nickname}}：</div>
                <div class="letter-m">
                  <div>{{mail.content}}</div>
                </div>
                <div class="u-info">
                  <img class="u-avatar" v-if="mail.headimgurl !== null" :src="mail.headimgurl" :alt="mail.nickname">
                  <span class="u-name">{{mail.nickname === null ? '匿名好友': mail.nickname}}</span>
                </div>
              </div>
              <div class="letter-total">
                {{i+1}} / {{mailsTotal}}
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="btns-wp">
          <a href="javascript:;" class="btn-link return-home" @click="onReturnHome"></a>
          <a href="javascript://" class="btn-link send-out" @click="onStepOut"></a>
        </div>

        <div class="letter-text"></div>

        <div class="logo-wp">
          <img class="logo-img" src="../../assets/images/logo.png" @click="showBrandEgg = true;" alt="中国巨幕">
        </div>
      </div>
    </div>
    <div class="keys-wp" v-if="showKeys">
      <div class="keys-main">
        <div class="qrcode-wp">
          <img src="../../assets/images/qr-code.png" class="qr-img" alt="">
        </div>
        <a href="javascript:;" class="keys-close" @click="showKeys = false;"></a>
        <a href="javascript://" class="btn-fuzhi" :data-clipboard-text="keyText" @click="fuzhi"></a>
      </div>
    </div>
    <div class="flower-heart" v-if="showFlower" @click="showFlower = false;">
      <img src="../../assets/images/flower_heart.png" class="flower-img">
    </div>

    <div class="share-tips" v-if="showShareTips">{{shareTipText}}</div>

    <div class="brand-egg" v-if="showBrandEgg" @click="showBrandEgg = false;">
      <div class="brand-egg-cont"></div>
    </div>
  </div>
</template>
<style src="./myLoveLetter.scss" lang="scss" scoped></style>
