<template>
  {{ data | json }}
</template>

<script>
  export default {
    data () {
      return {
        data: {}
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

        }, function (response) {

          // error callback
        })
      }
    }
  }
</script>
