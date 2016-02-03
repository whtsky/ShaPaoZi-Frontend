<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      results: [],
      page: 0,
      max_page: 0,
      total_results: 0
    }
  },
  route: {
    data (transition) {
      let page = transition.to.params.page
      if (page === undefined) {
        page = 1
      }
      let text = this.$route.params.text

      this.$http.get('search/' + text + '/page/' + page).then(function (response) {

        this.$set('results', response.data.results)
        this.$set('page', response.data.page)
        this.$set('max_page', response.data.max_page)
        this.$set('total_results', response.data.total)

      }, function (response) {

        // error callback
      })
    }
  }
}
</script>
