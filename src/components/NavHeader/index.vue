<style src="./index.css" scoped></style>
<template>
  <div class="nav">
    <div class="title">
      <img  class="icon-sidebar" src="../../assets/img/icon-sidebar.png" alt=""/>
      {{title}}
    </div>
    <div class="nav-bar">
      <span
        :class="{'active': isAll}"
        v-link="{name: 'all'}">全部</span>
      <span
        :class="{'active': isGood}"
        v-link="{name: 'good'}">精华</span>
      <span
        :class="{'active': isShare}"
        v-link="{name: 'share'}">分享</span>
      <span
        :class="{'active': isAsk}"
        v-link="{name: 'ask'}">问答</span>
      <span
        :class="{'active': isJob}"
        v-link="{name: 'job'}">招聘</span>
    </div>
  </div>
</template>

<script>
import { getAllTopics } from '../../vuex/actions.js'
export default {
  data () {
    return {
      title: '全部'
    }
  },
  computed: {
    tab: function () {
      return this.$route.name
    },
    isAll: function () {
      return this.tab === 'all' || ''
    },
    isGood: function () {
      return this.tab === 'good'
    },
    isShare: function () {
      return this.tab === 'share'
    },
    isAsk: function () {
      return this.tab === 'ask'
    },
    isJob: function () {
      return this.tab === 'job'
    }
  },
  methods: {
    getTopics () {
      let data = {
        page: 1,
        tab: this.tab,
        limit: 20,
        mdrender: true
      }
      this.getAllTopics(data)
    }
  },
  ready () {
    // this.getTopics()
  },
  vuex: {
    getters: {
      topics: state => state.topics
    },
    actions: {
      getAllTopics
    }
  }
}
</script>
