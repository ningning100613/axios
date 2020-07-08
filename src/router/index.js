import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/2-2',
    name: 'axios请求方法',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/2-2.vue')
  },
  {
    path: '/2-3',
    name: 'axios并发请求',
    component: () => import(
      '../views/2-3.vue'
    )
  },
  {
    path: '/3-1',
    name: 'axios实例',
    component: () => import(
      '../views/3-1.vue'
    )
  },
  {
    path: '/3-2',
    name: 'axios实例02',
    component: () => import(
      '../views/3-2.vue'
    )
  },
  {
    path: '/3-3',
    name: 'axios拦截器',
    component: () => import(
      '../views/3-3.vue'
    )
  },
  {
    path: '/3-4',
    name: 'axios请求错误处理',
    component: () => import(
      '../views/3-4.vue'
    )
  },
  {
    path: '/3-5',
    name: 'axios取消请求',
    component: () => import(
      '../views/3-5.vue'
    )
  },
  {
    path: '/ContactList',
    name: 'axiosVant',
    component: () => import(
      '../views/ContactList.vue'
    )

  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
