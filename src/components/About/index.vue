<style src="./index.css" scoped></style>
<template>
  <div class="about">
    <re-nav-header></re-nav-header>
    <div class="about-content">
      <div class="about-item">
        <p class="title">技术栈</p>
        <p class="content">vue/vue-router/vuex/vue-resource</p>
      </div>
      <a class="about-item" href="https://github.com/wendaosanshou/vue-cnode-learn" target="_blank">
        <p class="title">项目开源主页</p>
        <p class="content">https://github.com/wendaosanshou/vue-cnode-learn</p>
      </a>
      <a class="about-item" href="https://cnodejs.org/about" target="_blank">
        <p class="title">关于CNode社区</p>
        <p class="content">https://cnodejs.org/about</p>
      </a>
      <a class="about-item" href="https://github.com/wendaosanshou" target="_blank">
        <p class="title">关于作者</p>
        <p class="content">https://github.com/wendaosanshou</p>
      </a>
    </div>
  </div>
</template>

<script>
import ReNavHeader from '../common/ReNavHeader/index.vue'
import { setMenuState } from '../../vuex/actions.js'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  ready () {
  },
  route: {
    activate () {
      this.setMenuState(false)
    }
  },
  vuex: {
    getters: {
    },
    actions: {
      setMenuState
    }
  },
  components: {
    're-nav-header': ReNavHeader
  }
}
</script>
