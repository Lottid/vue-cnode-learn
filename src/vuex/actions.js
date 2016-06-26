import api from '../api/index.js'

export const getAllTopics = ({dispatch}, data) => {
  api.getAllTopics(data).then((ret) => {
    const data = ret.data && ret.data.data
    dispatch('GET_TOPICS', data)
  })
}

export const getGoodTopics = ({dispatch}, data) => {
  api.getAllTopics(data).then((ret) => {
    const data = ret.data && ret.data.data
    dispatch('GET_GOOD_TOPICS', data)
  })
}

export const getShareTopics = ({dispatch}, data) => {
  api.getAllTopics(data).then((ret) => {
    const data = ret.data && ret.data.data
    dispatch('GET_SHARE_TOPICS', data)
  })
}

export const getAskTopics = ({dispatch}, data) => {
  api.getAllTopics(data).then((ret) => {
    const data = ret.data && ret.data.data
    dispatch('GET_ASK_TOPICS', data)
  })
}

export const getJobTopics = ({dispatch}, data) => {
  api.getAllTopics(data).then((ret) => {
    const data = ret.data && ret.data.data
    dispatch('GET_JOB_TOPICS', data)
  })
}

export const getTopicDetail = ({dispatch}, id) => {
  api.getTopicDetail(id).then((ret) => {
    const data = ret.data && ret.data.data
    dispatch('GET_TOPIC_DETAIL', data)
  })
}
