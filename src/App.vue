<template>
  <div id="container">
    <logo></logo>
    <router-view></router-view>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style>
body {
  font-family: -apple-system,
    "Helvetica Neue", "Arial",
    "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei", "Microsoft JhengHei",
    "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC",
    "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
  background: url('./assets/bg.jpg') repeat;
}
  
</style>
