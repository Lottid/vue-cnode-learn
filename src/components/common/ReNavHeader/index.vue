<style src="./index.css" scoped></style>
<template>
  <div class="nav-header" @click="goBack">
    <img src="../../../assets/img/icon-return.png" class="icon-return" alt="" />
    {{title}}
  </div>
</template>

<script>
export default {
  computed: {
    title: function () {
      const name = this.$route.name
      const nameMap = {
        'topic': '主题',
        'about': '关于'
      }
      return nameMap[name]
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}

</script>
