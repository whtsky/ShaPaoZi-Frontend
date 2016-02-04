<template>
  <div id="search-wrapper">
    <div id="search">
      <input v-model="search_text" @keyup.enter="search" placeholder="猫的报恩" id="search-input">
      <input type="submit" @click="search" id="search-button" value="搜索">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      search_text: {default: ''}
    },
    methods: {
      search () {
        if (this.search_text !== '') {
          this.$router.go({ name: 'search', params: { text: this.search_text }})
        }
      }
    }
  }
</script>

<style>
  #search-wrapper {
    display: flex;
    justify-content: center;
  }

  #search input {
    line-height: 30px;
    font-size: 25px;
    padding: 10px 25px;
    border: 3px solid #b94a48;
    outline: none;
  }

  #search-input {
    height: 30px;
    width: 600px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }


  #search-button {
    margin-left: -30px;
    height: 56px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    background-color: #b94a48;
    color: #fff;
    cursor: pointer;
  }

  #search-button:hover {
    background-color: #ec7d7b;
  }

  @media (max-width: 900px) and (min-width: 600px) {
    #search-input {
      width: 400px;
    }
  }

  @media (max-width: 600px) {
    #search input {
      width: 90%;
      border-radius: 15px;
      display: block;
      margin: 20px auto
    }
  }

  #search input:focus {
    border: 3px solid #ec7d7b;
  }
</style>