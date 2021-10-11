import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import auth from '../components/auth.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'auth',
    component: auth
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
