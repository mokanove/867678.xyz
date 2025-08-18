import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import tkkhs from '../views/tkkhs.vue'
import speed from '../views/speed.vue'

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
      path: '/speed',
      name: 'speed',
      component: speed,
    },
  ],
})

export default router
