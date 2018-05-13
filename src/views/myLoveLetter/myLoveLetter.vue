<template>
  <div class="myLoveLetter-wp">
    <div class="myLoveLetter-cont">
      <img src="../../assets/images/logo.png" class="logo-img" alt="">

      <div class="myLoveLetter-main">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(mail,i) in mails" :key="i">
            <div class="letter-info">
              <div class="wm">亲爱的XXX：</div>
              <div class="letter-m-img">
                {{mail.content}}
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

        <div class="myLoveLetter-btns">
          <a href="#/home" class="myLoveLetter-btn-link"></a>
          <a href="javascript://" class="myLoveLetter-btn-link" @click="onStepOut">迈出这一步</a>
        </div>
      </div>
    </div>
    <div class="myLoveLetter-bottom"></div>
    <div class="keys-wp" v-if="showKeys" @click="showKeys = false;">
      复制密钥
      <a href="javascript://" class="btn-fuzhi" data-clipboard-text="这是复制内容" @click="fuzhi">复制密钥</a>
    </div>
  </div>
</template>
<style src="./myLoveLetter.scss" lang="scss" scoped></style>
