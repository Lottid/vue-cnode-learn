<style src="./index.css"></style>
<template>
  <div class="topic slideleft-enter">
    <re-nav-header></re-nav-header>
    <div class="topic-content">
      <div class="topic-title">{{topic.title}}</div>
      <div class="author">
        <img :src="avatorUrl" class="avator" alt="" />
        <div class="author-center">
          <div class="info-top">
            <label-type :item="topic"></label-type>
            <span class="author-name">{{authorName}}</span>
          </div>
          <div class="info-bottom">
            {{topic.create_at | formatRelativeTime}}•{{topic.visit_count}}次浏览
          </div>
        </div>
      </div>
      <div class="topic-detail markdown-body" v-html="topic.content">
      </div>
    </div>
    <div class="reply">
      <div class="reply-count">
        <span class="count">{{topic.reply_count}}</span>
        个回复
      </div>
      <div class="reply-item" v-for="item in replies">
        <div class="reply-top">
          <img :data-src="item.author.avatar_url" class="reply-avator lazyload" alt="" />
          <div class="reply-user">
            <span class="user-name">{{item.author.loginname}}</span>
            <div class="reply-time-content">
              <span class="floor">{{$index + 1}}楼</span> •
              <span class="relative-time">{{item.create_at | formatRelativeTime}}</span>
            </div>
          </div>
        </div>
        <div class="reply-content markdown-body" v-html="item.content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'webpack-zepto'
import marked from 'marked'
import ReNavHeader from '../common/ReNavHeader/index.vue'
import LabelType from '../common/LabelType/index.vue'
import { getTopicDetail } from '../../vuex/actions.js'
export default {
  computed: {
    replies: function () {
      return this.topic.replies
    },
    authorName: function () {
      return this.topic.author && this.topic.author.loginname
    },
    avatorUrl: function () {
      return this.topic.author && this.topic.author.avatar_url
    },
    id: function () {
      return this.$route.params['id']
    }
  },
  filters: {
    marked: marked
  },
  methods: {
    markedContent (content) {
      return marked(content)
    },
    getTopic () {
      this.getTopicDetail(this.id)
    },
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
  },
  ready () {
  },
  route: {
    activate () {
      this.getTopic()
      $(window).off('scroll')
    }
  },
  vuex: {
    getters: {
      topic: state => state.topic
    },
    actions: {
      getTopicDetail
    }
  },
  components: {
    're-nav-header': ReNavHeader,
    'label-type': LabelType
  }
}

</script>
