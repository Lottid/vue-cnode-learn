<style src="./index.css" scoped></style>
<template>
  <span class="title-type" :class="getTabClass(item)">{{getTabType(item)}}</span>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    getTabType ({tab, good, top}) {
      if (top) {
        return '置顶'
      } else if (good) {
        return '精华'
      } else {
        const tabTypes = {
          'share': '分享',
          'ask': '问答',
          'job': '招聘'
        }
        return tabTypes[tab] || '暂无'
      }
    },
    getTabClass ({tab, good, top}) {
      const className = top ? 'top' : (good ? 'good' : 'simple')
      return className
    }
  }
}
</script>
