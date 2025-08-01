import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tkkhs from '../views/tkkhs.vue'
import speedtest from '../views/speedtest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tkkhs',
      name: 'tkkhs',
      component: tkkhs,
    },
    {
      path: '/speedtest',
      name: 'speedtest',
      component: speedtest,
    },
  ],
})

export default router
