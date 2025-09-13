import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import tkkhs from '../views/projects/tkkhs.vue'
import updates from '../views/updates.vue'
//import projects from '../views/projects.vue'

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
      meta: {
        title: 'tkkhs'
      }
    },
    {
      path: '/updates',
      name: 'updates',
      component: updates,
      meta: {
        title: 'Updates & Fixeds'
      }
    },
    //{
    //  path: '/projects',
    //  name: 'projects',
    //  component: projects,
    //  meta: {
    //    title: 'Projects all view.'
   //}
  //    },
  ],
})

export default router