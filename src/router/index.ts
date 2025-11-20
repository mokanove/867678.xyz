import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
    },
    {
      path: '/updates',
      name: 'updates',
     component: () => import('../views/updates.vue'),
    },
    {
    path: '/projects',
     name: 'projects',
    component: () => import('../views/projects.vue'),
    },
    {
      path: '/projects/speedtest',
      name: 'speedtest',
      component: () => import('../views/projects/speedtest.vue'),
    },
    {
      path: '/projects/tkkhs',
      name: 'tkkhs',
      component: () => import('../views/projects/tkkhs.vue'),
    },
    {
      path: '/projects/fuestaos',
      name: 'FuestaOS',
      component: () => import('../views/projects/fuestaos.vue'),
    },
    {
      path: '/projects/moixa',
      name: 'moixa',
      component: () => import('../views/projects/moixa.vue'),
    },
    {
      path: '/projects/ghit',
      name: 'ghit',
      component: () => import('../views/projects/ghit.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404 Not Found',
      component: () => import('../views/error/404.vue')
    },
  ],
})
export default router