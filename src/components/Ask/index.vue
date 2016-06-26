<style src="./index.css" scoped></style>
<template>
  <div class="ask">
    <nav-header></nav-header>
    <list :topics="newTopics"></list>
  </div>
</template>

<script>
import NavHeader from '../NavHeader/index'
import List from '../List/index.vue'
import { getAskTopics, setNavState } from '../../vuex/actions.js'
import utils from '../../utils/utils.js'
export default {
  data () {
    return {
      newTopics: []
    }
  },
  methods: {
    getAllAsk () {
      let data = {
        page: 1,
        tab: 'ask',
        limit: 20
      }
      this.getAskTopics(data)
    },
    listenScroll () {
      utils.listenScroll((direction) => {
        if (direction === 'down') {
          this.setNavState(false)
        } else {
          this.setNavState(true)
        }
      }, (page) => {
        this.getAllAsk(page)
      })
    }
  },
  ready () {
    this.getAllAsk()
  },
  route: {
    activate () {
      this.listenScroll()
      this.$watch('askTopics', (newVal, oldVal) => {
        this.newTopics = this.newTopics.concat(newVal)
      })
    }
  },
  vuex: {
    getters: {
      askTopics: state => state.askTopics
    },
    actions: {
      getAskTopics,
      setNavState
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}

</script>
