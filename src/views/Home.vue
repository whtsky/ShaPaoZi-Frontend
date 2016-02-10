<template>
  <search-box></search-box>
</template>

<script>
  import SearchBox from '../components/SearchBox.vue'
  export default {
    route: {
      activate () {
        window.document.title = 'Index | ShaPaoZi.me'
      }
    },
    components: {
      SearchBox
    }
  }
</script>
