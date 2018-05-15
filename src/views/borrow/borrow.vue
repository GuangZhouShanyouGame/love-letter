<template>
  <div class="borrow-wp">
    <div class="borrow-cont">
      <div class="borrow-bg">
        <div class="borrow-main">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <div class="borrow-info">
                这是情书模板
              </div>
              <div class="borrow-total">
                1 / 60
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="borrow-info">
                这是情书模板
              </div>
              <div class="borrow-total">
                2 / 60
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>

          <div class="btns-wp">
            <a href="#/write" class="btn-link write-btn"></a>
            <a href="#/borrow" class="btn-link borrow-btn"></a>
            <a href="#/sendOut" class="btn-link write-sendOut-btn"></a>
          </div>

          <div class="letter-text"></div>

          <div class="logo-wp">
            <img class="logo-img" src="../../assets/images/logo.png" alt="中国巨幕">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./borrow.scss" lang="scss" scoped></style>
