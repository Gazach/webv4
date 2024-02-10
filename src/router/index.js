import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import create from '../views/creation.vue'
import social from '../views/Social.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Creation',
    name: 'creation',
    component: create
  }
  ,
  {
    path: '/social-link',
    name: 'social',
    component: social
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
