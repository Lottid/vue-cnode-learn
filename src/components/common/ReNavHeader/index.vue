<style src="./index.css" scoped></style>
<template>
  <div class="nav-header" @click="goBack">
    <img src="../../../assets/img/icon-return.png" class="icon-return" alt="" />
    话题
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}

</script>
