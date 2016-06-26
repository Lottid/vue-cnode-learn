import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  topics: [],
  goodTopics: [],
  shareTopics: [],
  askTopics: [],
  jobTopics: [],
  topic: {}
}

const mutations = {
  GET_TOPICS (state, topics) {
    state.topics = topics
  },
  GET_GOOD_TOPICS (state, goodTopics) {
    state.goodTopics = goodTopics
  },
  GET_SHARE_TOPICS (state, shareTopics) {
    state.shareTopics = shareTopics
  },
  GET_ASK_TOPICS (state, askTopics) {
    state.askTopics = askTopics
  },
  GET_JOB_TOPICS (state, jobTopics) {
    state.jobTopics = jobTopics
  },
  GET_TOPIC_DETAIL (state, topic) {
    state.topic = topic
  }
}

export default new Vuex.Store({
  state,
  mutations
})
