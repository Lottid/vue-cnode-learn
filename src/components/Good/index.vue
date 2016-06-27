<style src="./index.css" scoped></style>
<template>
  <div class="good">
    <nav-header></nav-header>
    <list :topics="newTopics"></list>
  </div>
</template>

<script>
import NavHeader from '../common/NavHeader/index'
import List from '../common/List/index.vue'
import { getGoodTopics, setNavState } from '../../vuex/actions.js'
import utils from '../../utils/utils.js'
export default {
  data () {
    return {
      show: false,
      newTopics: []
    }
  },
  methods: {
    getAllGood (page = 1) {
      let data = {
        page: 1,
        tab: 'good',
        limit: 20
      }
      return this.getGoodTopics(data)
    },
    listenScroll () {
      utils.listenScroll(({direction}) => {
        if (direction === 'down') {
          this.setNavState(false)
        } else {
          this.setNavState(true)
        }
      }, (page) => {
        this.getAllGood(page)
      })
    }
  },
  ready () {
    this.getAllGood()
  },
  route: {
    activate () {
      this.listenScroll()
      this.$watch('goodTopics', (newVal, oldVal) => {
        this.newTopics = this.newTopics.concat(newVal)
      })
    }
  },
  vuex: {
    getters: {
      goodTopics: state => state.goodTopics
    },
    actions: {
      getGoodTopics,
      setNavState
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}

</script>
