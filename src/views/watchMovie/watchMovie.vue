<template>
  <div class="watchMovie-wp">
    <div class="watchMovie-cont">
      <img src="../../assets/images/logo.png" class="logo-img" alt="">

      <div class="watchMovie-main">
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="letter-info">
              <div class="wm">亲爱的XXX：</div>
              <img src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg">
              <div class="u-info">
                <img class="u-avatar" src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg" alt="">
                <span class="u-name">已知昵称</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="letter-info">
              <img src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="letter-info">
              <img src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-3.jpg">
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

        <div class="watchMovie-btns">
          <a href="#" class="watchMovie-btn-link"></a>
          <a href="#" class="watchMovie-btn-link"></a>
        </div>
      </div>
    </div>
    <div class="watchMovie-bottom"></div>
  </div>
</template>
<style src="./watchMovie.scss" lang="scss" scoped></style>
