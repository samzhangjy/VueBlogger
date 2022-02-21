import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'boxicons'
import 'boxicons/css/boxicons.min.css'

console.log(`
_   __         ___  __
| | / /_ _____ / _ )/ /__  ___ ____ ____ ____
| |/ / // / -_) _  / / _ \\/ _ \`/ _ \`/ -_) __/
|___/\\_,_/\\__/____/_/\\___/\\_, /\\_, /\\__/_/
                        /___//___/

For geeks who wanted to write their blog site in Vue                 v0.1.0

Powered by %cVueBlogger%cv0.1.0%c

GitHub: https://github.com/samzhangjy/VueBlogger\nPlease star & fork to support the author!`,
'background-color: #1A55ED; padding: 7px; color: #fff;',
'background-color: #FCBF23; color: #000; padding: 7px;',
'font-weight: bold')

Vue.config.productionTip = false

Vue.use(Vuesax, {})

Vue.mixin({
  methods: {
    changeTitle: function (title) {
      let Config = null
      try {
        Config = require('@/../posts/data/config.json')
      } catch (e) {
        Config = require('@/defaults/config.json')
      }
      document.title = `${title} - ${Config.config.blogTitle}`
    },
    getConfig: function (name = 'config.json') {
      let Config = null
      try {
        Config = require(`@/../posts/data/${name}`)
      } catch (e) {
        Config = require(`@/defaults/${name}`)
      }
      return Config
    }
  },
  computed: {
    tags: function () {
      let Posts = null
      try {
        Posts = require('@/../posts/data/posts.json')
      } catch (e) {
        Posts = require('@/defaults/posts.json')
      }
      const posts = Posts.posts
      const tags = []
      for (var i = 0; i < posts.length; i++) {
        for (var j = 0; j < posts[i].tags.length; j++) {
          let index = -1
          for (var k = 0; k < tags.length; k++) {
            if (tags[k].name === posts[i].tags[j]) {
              index = k
              break
            }
          }
          if (index === -1) {
            tags.push({
              name: posts[i].tags[j],
              posts: [
                posts[i]
              ]
            })
          } else {
            tags[index].posts.push(posts[i])
          }
        }
      }
      return tags
    }
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
