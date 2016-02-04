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
      <a id="pager-prev" v-link="{ name: 'search_with_page', params: { text: this.$route.params.text, page: this.page - 1 }}" v-if="page > 1">上一页</a>
      <span>第 {{ page }} 页， 共 {{ max_page }} 页。 找到 {{ total_results }} 条结果</span>
      <a id="pager-next" v-link="{ name: 'search_with_page', params: { text: this.$route.params.text, page: this.page + 1 }}" v-if="page < max_page">下一页</a>
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
    margin-top: 20px;
    display: flex;
    justify-content: center;
    background-color: #f8f8f8;
  }

  #pager span {
    line-height: 2;
  }

  #pager-prev, #pager-next {
    background-color: rgba(255, 255, 255, .9);
    padding: 5px 10px;
    margin: 0 10px;
    text-decoration: none;
    color: #000;
    display: inline-block;
    border: 1px solid rgba(0,0,0,.3);
  }

  #pager-prev {
    float: left;
    border-radius: 20px 0 0 20px;
  }

  #pager-next {
    float: right;
    border-radius: 0 20px 20px 0;
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
