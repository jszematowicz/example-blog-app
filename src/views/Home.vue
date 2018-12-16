<!--Pokazywanie wszystkich wpisów na blogu-->
<template>
  <div class="home">
    <div class="content" v-for="entry in entryData" v-bind:key="entry">
      <h2 class="title">{{entry.title}}</h2>
      <p class="author">Posted by: {{entry.author}}</p>
      <p class="entryDate">On: {{entry.entryDate}}, {{entry.entryTime}}</p>
      <p class="paragraph">{{entry.content.paragraphs[0]}}</p>

      <router-link :to="`/entry/${entry.entryID}`" class="readMore">Read more...</router-link>
    </div>
  </div>
</template>

<script>
  import EntryData from '@/data/_entries.js';

  export default {
    name: 'home',
    components: {},
    data: function () {
      return {
        entryData: EntryData
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  @import '../assets/scss/_entry';

  .readMore {
    font-size: 12px;
    font-style: italic;
    padding-bottom: 15px;
  }
</style>
