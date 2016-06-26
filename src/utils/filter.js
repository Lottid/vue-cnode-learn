import moment from 'moment'
moment.locale('zh-cn')

export default {
  formatTime (time) {
    const date = new Date(time)
    return moment(date).format('YYYY-MM-DD')
  },
  formatRelativeTime (time) {
    const date = new Date(time)
    return moment(date).fromNow()
  },
  getLabelType ({tab, good, top}) {
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
  getLabelClass ({tab, good, top}) {
    const className = top ? 'top' : (good ? 'good' : 'simple')
    return className
  }
}
