<template>
  <div id="app">
    <interface></interface>
  </div>
</template>

<script>

import Interface from "./components/Interface";

export default {
  name: 'app',
  components: {
    Interface
  }
}
</script>

<style lang="scss">
  body {
    background: url("./assets/imgs/bg.jpg") no-repeat;
    background-size: cover;
  }

  #app {
    height: 100vh;
    width: 100%;
  }
</style>
