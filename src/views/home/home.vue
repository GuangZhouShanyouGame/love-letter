<template>
  <div class="home-wp">
    <h1>首页</h1>
    <br/>
    <a href="JavaScript://" @click="showNoLetter = true;">没有情书</a>
    <a href="#/myLoveLetter">我的情书</a>

    <div class="no-letter" v-if="showNoLetter" @click="showNoLetter = false;">
      没有情书
    </div>
  </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
