<template>
  <div id="app">
    <!-- <nav-header></nav-header> -->
    <router-view keep-alive></router-view>
    <return-top></return-top>
    <loading></loading>
    <menu-dialog></menu-dialog>
  </div>
</template>

<script>
import ReturnTop from './components/common/ReturnTop/index.vue'
import Loading from './components/common/Loading/index.vue'
import MenuDialog from './components/common/MenuDialog/index.vue'
import store from './vuex/store.js'

export default {
  components: {
    'return-top': ReturnTop,
    'loading': Loading,
    'menu-dialog': MenuDialog
  },
  store
}
</script>
