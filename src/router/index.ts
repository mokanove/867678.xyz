import { createRouter, createWebHistory } from 'vue-router'
//home
import Home from '../views/home.vue'
import updates from '../views/updates.vue'
import projects from '../views/projects.vue'
//projects
import  speedtest from '../views/projects/speedtest.vue'
import tkkhs from '../views/projects/tkkhs.vue'
import  FuestaOS from '../views/projects/fuestaos.vue'
import  moixa from '../views/projects/moixa.vue'
import  ghit from '../views/projects/ghit.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/updates',
      name: 'updates',
      component: updates,
    },
    {
    path: '/projects',
     name: 'projects',
    component: projects,
    },
    {
      path: '/projects/tkkhs',
      name: 'tkkhs',
      component: tkkhs,
    },
    {
      path: '/projects/fuestaos',
      name: 'FuestaOS',
      component: FuestaOS,
    },
    {
      path: '/projects/moixa',
      name: 'moixa',
      component: moixa,
    },
    {
      path: '/projects/ghit',
      name: 'ghit',
      component: ghit,
    },
    {
      path: '/projects/speedtest',
      name: 'speedtest',
      component: speedtest,
    },
  ],
})
export default router