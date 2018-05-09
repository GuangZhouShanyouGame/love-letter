<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
  @import "base";
  #app {
    width: 100%;
    height: 100%;
    color: $color-primary;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  }

</style>
<script>
  export default {}
</script>
