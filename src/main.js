import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routerMap from './router.js'

Vue.use(VueRouter)
Vue.config.debug = true

const router = new VueRouter({
  history: true
})

routerMap(router)
router.start(App, 'app')
