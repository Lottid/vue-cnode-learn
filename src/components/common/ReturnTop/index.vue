<style src="./index.css" scoped></style>
<template>
  <div class="return-top" @click="returnTop" v-if="navState">
    <img src="../../../assets/img/icon-top.png" class="icon-top" alt="" />
  </div>
</template>

<script>
import $ from 'webpack-zepto'
export default {
  methods: {
    returnTop () {
      $(window).scrollTop(0)
    }
  },
  vuex: {
    getters: {
      navState: state => state.navState
    }
  }
}

</script>
