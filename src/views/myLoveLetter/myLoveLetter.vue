<template>
  <div class="myLoveLetter-wp">
    <h1>我的情书页列表</h1>
    <br/>
    <a href="#/home">返回首页</a>
    <a href="javascript://" @click="showNoLetter = true;">迈出这一步</a>

    <a href="#/write">写情书</a>

   <div class="no-letter" v-if="showNoLetter" @click="showNoLetter = false;">
     <a href="javascript://" @click="showNoLetter = false;">点击复制密钥</a>
    </div>
  </div>
</template>
<style src="./myLoveLetter.scss" lang="scss" scoped></style>
