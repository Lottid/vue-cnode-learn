<style src="./index.css" scoped></style>
<template>
    <div class="list slideleft-enter"
      :class="{'hidePadding': navState === false}"
      >
      <list-item v-for="item in topics" :item="item" track-by="$index"></list-item>
    </div>
</template>

<script>
import ListItem from '../common/ListItem/index.vue'
import { setNavState } from '../../vuex/actions.js'
export default {
  data () {
    return {
    }
  },
  props: {
    topics: {
      type: Array
    }
  },
  methods: {
  },
  vuex: {
    getters: {
      navState: state => state.navState
    },
    actions: {
      setNavState
    }
  },
  components: {
    'list-item': ListItem
  }
}
</script>
