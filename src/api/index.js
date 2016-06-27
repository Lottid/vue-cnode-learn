import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../vuex/store.js'

Vue.use(VueResource)
const API_ROOT = 'http://cnodejs.org/api/v1/'

const TopicsResource = Vue.resource(API_ROOT + 'topics')
const TopicResource = Vue.resource(API_ROOT + 'topic{/id}')

// http拦截
Vue.http.interceptors.push((request, next) => {
  store.dispatch('SET_LOADING', true)
  next((response) => {
    store.dispatch('SET_LOADING', false)
  })
})

export default {
  getAllTopics (data) {
    return TopicsResource.get({...data})
  },
  getTopicDetail (id) {
    return TopicResource.get({
      'id': id
    })
  }
}
