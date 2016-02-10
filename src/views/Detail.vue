<template>
  <loading v-if="loading"></loading>
  <img src="../assets/404.png" v-if="notFound" id="not-found">
  <div id="detail" v-if="data.infohash">
    <header>{{ data.title }}</header>
    <ul>
      <li>首次发现: {{ data.first_seen | timeago }}</li>
      <li>上次发现: {{ data.last_seen | timeago }}</li>
      <li>下载量: {{ data.seen }}</li>
      <li>大小: {{ data.length | bytesToSize }}</li>
      <li>文件数: {{ data.file_count }}</li>
    </ul>
    文件列表:
    <template v-if="data.files">
      <ul>
        <template v-for="file in data.files">
          <li>{{ file.path.join("/") }} ( {{ file.length | bytesToSize }} )</li>
        </template>
      </ul>
    </template>
    <template v-if="data.filename">
      <ul>
        <li>{{ data.filename }} ( {{ data.length | bytesToSize }} )</li>
      </ul>
    </template>

    <footer>
      <a href="magnet:?xt=urn:btih:{{ data.infohash }}">磁力下载</a>
    </footer>
  </div>
</template>

<style>
  #detail {
    word-break: break-all;
    background-color: #f6f6f6;
    border-radius: 30px;
    padding: 25px 30px;
    margin: 20px auto;
    width: 800px;
    border: 3px solid rgb(166, 74, 72);
  }

  @media (max-width: 900px) {
    #detail {
      width: auto;
    }
  }

  #detail header {
    font-size: 1.4em;
    line-height: 1.6em;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  #detail footer {
    border-top: 1px solid rgba(0, 0, 0, .1);
    padding-top: 10px;
    margin-top: 10px;
  }

  #not-found {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<script>
  import Loading from '../components/Loading.vue'

  export default {
    data () {
      return {
        data: {},
        loading: true,
        notFound: false
      }
    },
    route: {
      canReuse: false,
      activate () {
        window.document.title = 'Detail | ShaPaoZi.me'
      },
      data (transition) {
        let infohash = transition.to.params.infohash

        this.$http.get('infohash/' + infohash).then(function (response) {

          this.$set('data', response.data)
          this.loading = false

        }, function (response) {
          this.loading = false
          this.notFound = true
        })
      }
    },
    components: {
      Loading
    }
  }
</script>
