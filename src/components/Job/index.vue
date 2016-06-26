<style src="./index.css" scoped></style>
<template>
  <div class="job">
    <nav-header></nav-header>
    <list :topics="newTopics"></list>
  </div>
</template>

<script>
import NavHeader from '../NavHeader/index'
import List from '../List/index.vue'
import { getJobTopics, setNavState } from '../../vuex/actions.js'
import utils from '../../utils/utils.js'
export default {
  data () {
    return {
      newTopics: []
    }
  },
  methods: {
    getAllJob (page = 1) {
      let data = {
        page: page,
        tab: 'job',
        limit: 20
      }
      this.getJobTopics(data)
    },
    listenScroll () {
      utils.listenScroll((direction) => {
        if (direction === 'down') {
          this.setNavState(false)
        } else {
          this.setNavState(true)
        }
      }, (page) => {
        this.getAllJob(page)
      })
    }
  },
  ready () {
    this.getAllJob()
  },
  route: {
    activate () {
      this.listenScroll()
      this.$watch('jobTopics', (newVal, oldVal) => {
        this.newTopics = this.newTopics.concat(newVal)
      })
    }
  },
  vuex: {
    getters: {
      jobTopics: state => state.jobTopics
    },
    actions: {
      getJobTopics,
      setNavState
    }
  },
  components: {
    'list': List,
    'nav-header': NavHeader
  }
}

</script>
