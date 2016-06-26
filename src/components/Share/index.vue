<style src="./index.css" scoped></style>
<template>
  <div class="share">
    <nav-header></nav-header>
    <list :topics="shareTopics"></list>
  </div>
</template>

<script>
import NavHeader from '../NavHeader/index'
import List from '../List/index.vue'
import { getShareTopics } from '../../vuex/actions.js'
export default {
  methods: {
    getAllShare () {
      let data = {
        page: 1,
        tab: 'share',
        limit: 20
      }
      this.getShareTopics(data)
    }
  },
  ready () {
    this.getAllShare()
  },
  vuex: {
    getters: {
      shareTopics: state => state.shareTopics
    },
    actions: {
      getShareTopics
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}

</script>
