<template>
  <div id="app">
    <Navigator/>
    <div class="pageContent">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navigator from './components/Navigator';

  export default {
    components: {
      Navigator,
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/defaults';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .pageContent {
    margin-left: 10%;
    margin-right: 10%;
  }
</style>
