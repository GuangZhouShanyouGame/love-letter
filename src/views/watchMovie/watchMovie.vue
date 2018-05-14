<template>
  <div class="watchMovie-wp">
    <div class="watchMovie-cont">
      <div class="watchMovie-bottom-bg">
        <div class="watchMovie-main">
          <div class="letter-info">
            <div class="wm">亲爱的XXX：</div>
            <div class="letter-m">
              {{mail.content}}
            </div>
            <div class="u-info">
              <img class="u-avatar" :src="mail.headimgurl" :alt="mail.nickname">
              <span class="u-name">{{mail.nickname}}</span>
            </div>
          </div>

          <div class="btns-wp">
            <a href="#/home" class="btn-link return-home"></a>
            <a href="javascript://" class="btn-link watchMovie-link"></a>
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
<style src="./watchMovie.scss" lang="scss" scoped></style>
