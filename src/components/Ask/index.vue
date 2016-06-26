<style src="./index.css" scoped></style>
<template>
  <div class="share">
    <nav-header></nav-header>
    <list :topics="askTopics"></list>
  </div>
</template>

<script>
import NavHeader from '../NavHeader/index'
import List from '../List/index.vue'
import { getAskTopics } from '../../vuex/actions.js'
export default {
  methods: {
    getAllAsk () {
      let data = {
        page: 1,
        tab: 'ask',
        limit: 20
      }
      this.getAskTopics(data)
    }
  },
  ready () {
    this.getAllAsk()
  },
  vuex: {
    getters: {
      askTopics: state => state.askTopics
    },
    actions: {
      getAskTopics
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}

</script>
