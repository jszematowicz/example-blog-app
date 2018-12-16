<!-- Widok pojedyńczego, pełnego wpisu na blogu. Dane z pliku '_entires.js' zostają przefiltrowane tak, by został pokazany
wyłącznie wpis o odpowiednim ID-->
<template>
  <div class="entry">
    <div class="content">
      <h2 class="title">{{singleEntry[0].title}}</h2>
      <p class="author">Posted by: {{singleEntry[0].author}}</p>
      <p class="entryDate">On: {{singleEntry[0].entryDate}}, {{singleEntry[0].entryTime}}</p>
      <img :src="singleEntry[0].content.headerImageUrl" class="headerImage">
      <p class="paragraph" v-for="paragraph in singleEntry[0].content.paragraphs">{{paragraph}}</p>
    </div>
  </div>
</template>

<script>
  import EntryData from '@/data/_entries.js';

  export default {
    name: 'entry',
    components: {},
    data: function () {
      return {
        entryData: EntryData,
        id: parseInt(this.$route.params.entryID)
      }
    },
    computed: {
      /*funkcja filtrująca dane używająca ID dostarczonego z routingu*/
      singleEntry() {
        return this.entryData
          .filter(x => x.entryID === this.id);
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/_entry';
</style>
