<style src="./index.css" scoped></style>
<template>
    <div class="list">
      <list-item v-for="item in topics" :item="item" track-by="$index"></list-item>
    </div>
</template>

<script>
import ListItem from '../common/ListItem/index.vue'
export default {
  data () {
    return {
      msg: '123123'
    }
  },
  props: {
    topics: {
      type: Array
    }
  },
  route: {
    activate () {
      console.log('1')
    }
  },
  amount () {
    console.log(2)
  },
  vuex: {
    getters: {
      // topics: state => state.topics
    }
  },
  components: {
    'list-item': ListItem
  }
}
</script>
