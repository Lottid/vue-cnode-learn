<style src="./index.css" scoped></style>
<template>
  <div class="share">
    <nav-header></nav-header>
    <list :topics="jobTopics"></list>
  </div>
</template>

<script>
import NavHeader from '../NavHeader/index'
import List from '../List/index.vue'
import { getJobTopics } from '../../vuex/actions.js'
export default {
  methods: {
    getAllJob () {
      let data = {
        page: 1,
        tab: 'job',
        limit: 20
      }
      this.getJobTopics(data)
    }
  },
  ready () {
    this.getAllJob()
  },
  vuex: {
    getters: {
      jobTopics: state => state.jobTopics
    },
    actions: {
      getJobTopics
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}

</script>
