<template>
  <div id="logo-area">
    <strong @click="this.$router.go({ name: 'home'})">ShaPaoZi.me</strong>
  </div>
</template>
<style>
  @import url(//fonts.googleapis.com/css?family=Alegreya+Sans+SC:300);

  #logo-area{
    display: flex;
    justify-content: center;
    margin: 10vh auto;
  }

  #logo-area strong {
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 60px;
    background-color: rgba(238, 238, 238, 0.9);
    padding: 10px 20px;
    color: #b94a48;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    #logo-area strong {
      font-size: 50px;
    }
  }

</style>
<script>
  export default {
    methods: {
    }
  }
</script>