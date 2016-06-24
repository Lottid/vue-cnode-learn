export default function (router) {
  router.map({
    '/home': {
      name: 'home',
      component: function (resolve) {
        require(['./components/Home/index.vue'], resolve)
      }
    }
  })
  router.redirect({
    '*': '/home'
  })
}
