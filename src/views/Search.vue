<template>
  <search-box :search_text="$route.params.text"></search-box>
  <loading v-if="loading"></loading>
  <template v-if="!loading">
    <template v-if="results.length">
      <div id="results">
        <result-card :result="item" v-for="item in results"></result-card>
      </div>
    </template>
    <div id="pager" v-if="page">
      <a v-link="{ name: 'search_with_page', params: { text: this.$route.params.text, page: this.page - 1 }}" v-if="page > 1">上一页</a>
      <span>第 {{ page }} 页, 共 {{ max_page }}页. 找到 {{ total_results }}条结果.</span>
      <a v-link="{ name: 'search_with_page', params: { text: this.$route.params.text, page: this.page + 1 }}" v-if="page < max_page">下一页</a>
    </div>
  </template>
</template>

<style>
  #results {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #pager {
    padding: 10px 0;
    margin: 10px 0;
    display: flex;
    justify-content: center;
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
      total_results: 0,
      loading: true
    }
  },
  route: {
    data (transition) {
      this.$set('loading', true)
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
        this.$set('loading', false)

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
