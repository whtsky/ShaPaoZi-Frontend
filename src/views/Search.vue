<template>
  <search-box :search_text="$route.params.text"></search-box>
  <template v-if="results">
    <template v-if="results.length">
      <div id="results"
           v-infinite-scroll="loadNextPage()"
           infinite-scroll-disabled="loadingDisabled"
           infinite-scroll-distance="400">
        <result-card :result="item" v-for="item in results" track-by="infohash"></result-card>
      </div>
    </template>
  </template>
  <loading v-if="loading"></loading>
</template>

<style>
  #results {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<script>
import SearchBox from '../components/SearchBox.vue'
import ResultCard from '../components/ResultCard.vue'
import Loading from '../components/Loading.vue'

export default {
  data () {
    return {
      results: [],
      page: 0,
      max_page: 0,
      loading: true,
      loadingDisabled: false
    }
  },
  methods: {
    loadNextPage () {
      if (this.loadingDisabled) {
        return
      }
      this.loading = true
      this.loadingDisabled = true
      this.page++
      this.$http.get('search/' + this.$route.params.text + '/page/' + this.page).then(function (response) {

        this.results = this.results.concat(response.data.results)
        this.max_page = response.data.max_page
        this.loading = false
        if (this.max_page >= this.page) {
          this.loadingDisabled = true
        } else {
          this.loadingDisabled = false
        }
      }, function (response) {

        // error callback
      })
    }
  },
  components: {
    SearchBox,
    ResultCard,
    Loading
  }
}
</script>
