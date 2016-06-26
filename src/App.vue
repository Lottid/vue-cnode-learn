<template>
  <div id="app">
    <!-- <nav-header></nav-header> -->
    <router-view keep-alive></router-view>
  </div>
</template>

<script>
// import NavHeader from './components/NavHeader/index'
import store from './vuex/store.js'

export default {
  components: {
    // 'nav-header': NavHeader
  },
  store
}
</script>
