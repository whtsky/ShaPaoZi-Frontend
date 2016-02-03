import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

if (process.env.NODE_ENV === 'development') {
  Vue.config.debug = true

}

Vue.use(VueRouter)
Vue.use(VueResource)

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
  '/search/:text/page/:page': {
    name: 'search',
    component: Search
  },
  '/detail/:infohash': {
    name: 'detail',
    component: Detail
  }
})

router.start(App, 'app')