<!-- Div zawierający linki do podstron -->
<template>
  <div class="navigator">
    <router-link to="/">Homepage</router-link>
    |
    <router-link to="/aboutMe/">About Me</router-link>
    |
    <router-link to="/contact/">Contact me</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Navigator',
  }
</script>

<style scoped lang="scss">
  .navigator {
    height: 50px;
    text-align: center;
    padding: 30px;
    border-bottom: rgba(0, 0, 0, 0.30) 1px solid;
    background-color: #8f9cbf;
    a {
      font-size: 24px;
      font-weight: bold;
      color: #ebebeb;
      &.router-link-exact-active {
        color: #248000;
      }
    }
  }
</style>
