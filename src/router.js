export default function (router) {
  router.map({
    '/all': {
      name: 'all',
      component: function (resolve) {
        require(['./components/All/index.vue'], resolve)
      }
    },
    '/good': {
      name: 'good',
      component: function (resolve) {
        require(['./components/Good/index.vue'], resolve)
      }
    },
    '/share': {
      name: 'share',
      component: function (resolve) {
        require(['./components/Share/index.vue'], resolve)
      }
    },
    '/ask': {
      name: 'ask',
      component: function (resolve) {
        require(['./components/Ask/index.vue'], resolve)
      }
    },
    '/job': {
      name: 'job',
      component: function (resolve) {
        require(['./components/Job/index.vue'], resolve)
      }
    },
    '/topic/:id': {
      name: 'topic',
      component: function (resolve) {
        require(['./components/Topic/index.vue'], resolve)
      }
    }
  })
  router.redirect({
    '*': '/all'
  })
}
