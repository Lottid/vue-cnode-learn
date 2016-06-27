import $ from 'webpack-zepto'
const listenScroll = (swipeCallback, fetchCallback) => {
  const $window = $(window)
  const windowHeight = $window.height()
  let beforeScroll = $window.scrollTop()
  let page = 2
  $window.off('scroll').scroll(() => {
    const scrollTop = $window.scrollTop()
    const contentHeight = $('body').height()
    const direction = scrollTop > beforeScroll ? 'down' : 'up'
    // const scrollBottom = scrollTop + windowHeight === contentHeight ? true : false
    const params = {
      scrollTop,
      direction
    }
    swipeCallback(params)
    if (scrollTop + windowHeight === contentHeight) {
      fetchCallback(page)
      page++
    }
    beforeScroll = scrollTop
  })
}

export default {
  listenScroll
}
