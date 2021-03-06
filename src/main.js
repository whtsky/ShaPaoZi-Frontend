import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'vue-infinite-scroll'
import * as filters from './filters'

Vue.use(VueRouter)
Vue.use(VueResource)

Object.keys(filters).forEach(function (k) {
  Vue.filter(k, filters[k])
})

Vue.http.options.root = '/api'

var router = new VueRouter({
  hashbang: false,
  history: true,
  saveScrollPosition: true
})

import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Detail from './views/Detail.vue'

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/search/:text': {
    name: 'search',
    component: Search
  },
  '/detail/:infohash': {
    name: 'detail',
    component: Detail
  }
})

if (process.env.NODE_ENV === 'development') {
  Vue.config.debug = true
  window.ga = function () {}
} else {
  router.afterEach(function (transition) {
    window.ga('send', 'pageview', transition.to.path)
  })
}

router.start(App, 'app')
