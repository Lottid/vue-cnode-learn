import 'normalize.css'
import './assets/css/base.css'
import './assets/js/adapter'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routerMap from './router.js'
import filters from './utils/filter.js'
// import moment from 'moment'

Vue.use(VueRouter)
Vue.config.debug = true
// moment.locale('zh-cn')
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
const router = new VueRouter({
  history: true
})

routerMap(router)
router.start(App, 'app')
