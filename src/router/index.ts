import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home-page/HomePage.vue'
import AboutPage from '../pages/about-page/AboutPage.vue'
import { NamePath, PagePath } from '../sources/enums'
import SneakersPage from '../pages/sneakers-page/SneakersPage.vue'

const routes = [
  {
    path: PagePath.HomePage,
    name: NamePath.HomePage,
    component: HomePage,
  },
  {
    path: PagePath.AboutPage,
    name: NamePath.AboutPage,
    component: AboutPage,
  },
  {
    path: PagePath.SneakersPage,
    name: NamePath.SneakersPage,
    component: SneakersPage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})