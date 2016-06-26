<style src="./index.css" scoped></style>

<template>
  <div class="list-item" v-link="{name: 'topic', params: {id: item.id}}">
    <div class="item-title">
      <span class="title-type" :class="item | getLabelClass">{{item | getLabelType}}</span>
      <div class="title-txt">
        {{item.title}}
      </div>
    </div>
    <div class="item-info clearfix">
      <img class="avator" :src="item.author.avatar_url" alt="" />
      <div class="item-center">
        <span class="user-name">
          {{item.author.loginname}}
        </span>
        <span class="create-time">
          创建于:{{item.create_at | formatTime}}
        </span>
      </div>
      <div class="item-right">
        <span class="reader-data">{{item.reply_count}}/{{item.visit_count}}</span>
        <span class="relative-time">{{item.last_reply_at | formatRelativeTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  props: {
    'item': {
      type: Object
    }
  }
}
</script>
