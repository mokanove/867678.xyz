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
      path: '/updates-old',
      name: 'updates-old',
     component: () => import('../views/updates-old.vue'),
    },
    {
    path: '/projects',
     name: 'projects',
    component: () => import('../views/projects.vue'),
    },
    {
      path: '/projects/moitools',
      name: 'moitools',
      component: () => import('../views/projects/moitools.vue'),
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
      path: '/projects/laoues',
      name: 'laoues',
      component: () => import('../views/projects/laoues.vue'),
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