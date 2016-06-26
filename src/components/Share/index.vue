<style src="./index.css" scoped></style>
<template>
  <div class="share">
    <nav-header></nav-header>
    <list :topics="newTopics"></list>
  </div>
</template>

<script>
// import $ from 'webpack-zepto'
import NavHeader from '../NavHeader/index'
import List from '../List/index.vue'
import { getShareTopics, setNavState } from '../../vuex/actions.js'
import utils from '../../utils/utils.js'
export default {
  data () {
    return {
      newTopics: []
    }
  },
  methods: {
    getAllShare (page = 1) {
      let data = {
        page: page,
        tab: 'share',
        limit: 20
      }
      this.getShareTopics(data)
    },
    listenScroll () {
      utils.listenScroll((direction) => {
        if (direction === 'down') {
          this.setNavState(false)
        } else {
          this.setNavState(true)
        }
      }, (page) => {
        this.getAllShare(page)
      })
    }
  },
  ready () {
    this.getAllShare()
  },
  route: {
    activate () {
      this.listenScroll()
      this.$watch('shareTopics', (newVal, oldVal) => {
        this.newTopics = this.newTopics.concat(newVal)
      })
    }
  },
  vuex: {
    getters: {
      shareTopics: state => state.shareTopics
    },
    actions: {
      getShareTopics,
      setNavState
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}

</script>
