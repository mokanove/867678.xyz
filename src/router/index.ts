import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import tkkhs from '../views/tkkhs.vue'
import moixa from '../views/moixa.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tkkhs',
      name: 'tkkhs',
      component: tkkhs,
    },
    {
      path: '/moixa',
      name: 'moixa',
      component: moixa,
    },
  ],
})

export default router
