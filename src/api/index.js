import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const API_ROOT = 'http://cnodejs.org/api/v1/'

const TopicsResource = Vue.resource(API_ROOT + 'topics')
const TopicResource = Vue.resource(API_ROOT + 'topic{/id}')

export default {
  getAllTopics (data) {
    return TopicsResource.get({...data})
  },
  getTopicDetail (id) {
    return TopicResource.get({'id': id})
  }
}
