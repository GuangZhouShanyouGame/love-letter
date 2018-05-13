<template>
  <div class="loading-wp">
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
