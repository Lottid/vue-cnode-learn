<style src="./index.css" scoped></style>
<template>
  <div class="home">
    <nav-header></nav-header>
    <list :topics="topics"></list>
  </div>
</template>

<script>
import NavHeader from '../NavHeader/index'
import List from '../List/index.vue'
import { getAllTopics } from '../../vuex/actions.js'
export default {
  data () {
    return {
      msg: '123123'
    }
  },
  methods: {
    getAll () {
      let data = {
        page: 1,
        tab: '',
        limit: 20
      }
      this.getAllTopics(data)
    }
  },
  ready () {
    this.getAll()
  },
  route: {
    activate () {
    }
  },
  vuex: {
    getters: {
      topics: state => state.topics
    },
    actions: {
      getAllTopics
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}
</script>
