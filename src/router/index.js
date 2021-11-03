import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "output" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "output" */ '../views/Register.vue'),
  },
  {
    path: '/verses',
    name: 'Verses',
    component: () => import(/* webpackChunkName: "output" */ '../views/Verses.vue'),
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
