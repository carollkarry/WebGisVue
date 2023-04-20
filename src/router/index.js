import { createRouter, createWebHashHistory } from 'vue-router'
import WebGis from '../views/WebGis'


const routes = [
  {
    path: '/',
    name: 'WebGis',
    component: WebGis,
  },


]
const router=createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
