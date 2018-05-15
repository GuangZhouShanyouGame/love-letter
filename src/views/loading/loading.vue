<template>
  <div class="loading-wp">
    <div class="loading-m">
      <img src="../../assets/images/loading_01.png" class="loading-img" alt="">
    </div>
    <div class="progress-cont">
      <div class="progress-w">
        <div class="progress-bar" :style="'width:' + percent.num + '%;'"></div>
      </div>
      <div class="progress-Num">
        {{percent.num}}
        <span>%</span>
      </div>
    </div>
  </div>
</template>
<style src="./loading.scss" lang="scss" scoped></style>
