<template>
  <div class="watchMovie-wp">
    <div class="watchMovie-cont">
      <div class="watchMovie-bottom-bg">
        <div class="watchMovie-main">
          <div class="letter-info">
            <div class="wm">亲爱的{{auth_data.nickname}}：</div>
            <div class="letter-m">
              <div v-html="mail.content"></div>
            </div>
            <div class="u-info">
              <img class="u-avatar" :src="mail.headimgurl" :alt="mail.nickname">
              <span class="u-name">{{mail.nickname}}</span>
            </div>
          </div>

          <div class="btns-wp">
            <a href="javascript:;" class="btn-link return-home" @click="onReturnHome"></a>
            <a href="javascript:;" class="btn-link watchMovie-link" @click="onWatchMovie"></a>
          </div>

          <div class="letter-text"></div>

          <div class="logo-wp">
            <img class="logo-img" src="../../assets/images/logo.png" @click="showBrandEgg = true;" alt="中国巨幕">
          </div>
        </div>
      </div>
    </div>

    <div class="ticket-finish" v-if="showTicketFinish">
      <div class="ticketFinish-cont">
        <a href="javascript:;" class="ticketFinish-close" @click="showTicketFinish = false;"></a>
        <a :href="buyTicketUrl" class="buy-tickets"></a>
      </div>
    </div>

    <div class="ticket" v-if="showTicket">
      <div class="ticket-cont" :style="{'background-image': `url(${ticketBg})`}">
        <div class="ticket-code">{{ticketInfo.film_code}}</div>
        <div class="ticket-close" @click="showTicket = false;"></div>
        <div @click="goTicekt(ticketInfo.url)" class="receive-tickets" v-show="showTicketBtn"></div>
      </div>
    </div>

    <div class="brand-egg" v-if="showBrandEgg" @click="showBrandEgg = false;">
      <div class="brand-egg-cont"></div>
    </div>
  </div>
</template>
<style src="./watchMovie.scss" lang="scss" scoped></style>
