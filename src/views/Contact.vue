<!-- Strona z informacjami kontaktowymi -->
<template>
  <div class="content">
    <p class="info">Email : account@site.com</p>
    <p class="info">Telephone : 123 456 789</p>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    components: {},
    data: function () {
      return {}
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/_entry';

  .info {
    text-align: center;
  }
</style>