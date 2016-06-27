<style src="./index.css" scoped></style>
<template>
  <div class="menu" v-if="menuState">
    <div class="mask" @click="setMenuState(false)"></div>
    <ul class="menu-dialog">
      <li class="menu-item" v-link="{name: 'about'}">
        <img src="../../../assets/img/icon-about.png" alt="" class="icon-abount"/>关于
      </li>
    </ul>
  </div>
</template>

<script>
import { setMenuState } from '../../../vuex/actions.js'
export default {
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {
  },
  vuex: {
    getters: {
      menuState: state => state.menuState
    },
    actions: {
      setMenuState
    }
  }
}
</script>
