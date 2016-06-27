import 'normalize.css'
import 'github-markdown-css/github-markdown.css'
import './assets/css/base.css'
import './assets/css/animate.css'
import './assets/js/adapter'
import 'lazysizes/lazysizes.min.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import App from './App'
import routerMap from './router.js'
import filters from './utils/filter.js'

Vue.use(VueTouch)
Vue.use(VueRouter)
Vue.config.debug = true

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

routerMap(router)
router.start(App, 'app')
