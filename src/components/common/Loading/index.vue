<style src="./index.css" scoped></style>
<template>
  <div class="mask" v-if="loadingState">
    <img src="../../../assets/img/loading-spin.svg" class="loading" alt="" />
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
      loadingState: state => state.loadingState
    }
  }
}

</script>
