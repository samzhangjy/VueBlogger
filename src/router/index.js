import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewPost from '../views/ViewPost.vue'
import ViewTag from '../views/ViewTag.vue'
import BlogEntries from '@/../posts/data/posts.json'
import About from '../views/About.vue'
import ViewTags from '../views/ViewTags.vue'
import ViewProjects from '../views/ViewProjects.vue'

const children = []

BlogEntries.posts.map(post => {
  children.push({
    path: post.id,
    component: async function () {
      let value
      await import(`@/../posts/${post.id}.md`).then((val) => {
        value = val
      })
      return value.vue.component
    }
  })
})
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'ViewPost',
    component: ViewPost,
    children: children
  },
  {
    path: '/tags/:tag',
    name: 'ViewTag',
    component: ViewTag
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tags',
    name: 'ViewTags',
    component: ViewTags
  },
  {
    path: '/projects',
    name: 'ViewProjects',
    component: ViewProjects
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
