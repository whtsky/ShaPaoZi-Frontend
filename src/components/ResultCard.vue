<template>
  <div class="result">
    <a href="magnet:?xt=urn:btih:{{ result.infohash }}" class="download">磁力下载</a>
    <header>
      {{ result.title }}
    </header>
    首次发现: {{ result.first_seen | timeago }} &nbsp; 文件数: {{ result.file_count }} &nbsp;
    下载量: {{ result.seen }} &nbsp; 大小: {{ result.length | bytesToSize }}
  </div>
</template>

<style>
  .result {
    background-color: rgba(255, 255, 255, .95);
    border-radius: 30px;
    padding: 25px 30px;
    margin: 20px;
    width: 800px;
    border: 3px solid rgb(166, 74, 72);
  }

  .result header {
    font-size: 1.4em;
    line-height: 1.6em;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .download {
    background-color: #1E90FF;
    padding: 10px 20px;
    text-decoration: none;
    color: #f6f6f6;
    display: inline-block;
    border-radius: 20px;
    float: right;
  }
</style>
<script>
export default {
  props: ['result']
}
</script>