import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/#about',
    name: 'about',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/#merch',
    name: 'merch',
    component:()=> import('../views/HomeView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: ()=>import('../views/AdminV.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=>import('../views/ContactUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
