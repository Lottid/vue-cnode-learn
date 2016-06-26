<style src="./index.css" scoped></style>
<template>
  <div class="home">
    <nav-header></nav-header>
    <list :topics="newTopics"></list>
  </div>
</template>

<script>
// import $ from 'webpack-zepto'
import NavHeader from '../NavHeader/index'
import List from '../List/index.vue'
import { getAllTopics, setNavState } from '../../vuex/actions.js'
import utils from '../../utils/utils.js'
export default {
  data () {
    return {
      newTopics: []
    }
  },
  methods: {
    getAll (page = 1) {
      let data = {
        page: page,
        tab: '',
        limit: 20
      }
      this.getAllTopics(data)
    },
    listenScroll () {
      utils.listenScroll((direction) => {
        if (direction === 'up') {
          this.setNavState(true)
        } else {
          this.setNavState(false)
        }
      }, (page) => {
        this.getAll(page)
      })
    }
  },
  ready () {
    this.getAll()
  },
  route: {
    activate () {
      this.listenScroll()
      this.$watch('topics', (newVal, oldVal) => {
        this.newTopics = this.newTopics.concat(newVal)
      })
    }
  },
  vuex: {
    getters: {
      topics: state => state.topics
    },
    actions: {
      getAllTopics,
      setNavState
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}
</script>
