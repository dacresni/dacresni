import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Nehemiah's Project Dashboard"
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "About Nehemiah's Awesome Website"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/photos',
    name: 'Photography',
    meta: {
      title: "About Nehemiah's Awesome Photography"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "picts" */ '../views/Picts.vue')
  },
  {
    path: '/posts',
    name: 'Blog',
    meta: {
      title: "About Nehemiah's Awesome Blog"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
