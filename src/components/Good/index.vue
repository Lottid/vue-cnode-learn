<style src="./index.css" scoped></style>
<template>
  <div class="good">
    <nav-header></nav-header>
    <list :topics="goodTopics"></list>
  </div>
</template>

<script>
import NavHeader from '../NavHeader/index.vue'
import List from '../List/index.vue'
import { getGoodTopics } from '../../vuex/actions.js'
export default {
  methods: {
    getAllGood () {
      let data = {
        page: 1,
        tab: 'good',
        limit: 20
      }
      this.getGoodTopics(data)
    }
  },
  ready () {
    this.getAllGood()
  },
  vuex: {
    getters: {
      goodTopics: state => state.goodTopics
    },
    actions: {
      getGoodTopics
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}

</script>
