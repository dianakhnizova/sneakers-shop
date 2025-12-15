import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home-page/HomePage.vue'
import AboutPage from '../pages/about-page/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})