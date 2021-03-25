import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aplikasi',
    name: 'Aplikasi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Aplikasi.vue')
  },
  {
    path: '/kelas',
    name: 'Kelas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kelas.vue')
  },
  {
    path: '/portofolio',
    name: 'Portofolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portofolio.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kontak.vue')
  }
]


const router = new VueRouter({
  mode:'history',
  routes
})

export default router
