import { createRouter, createWebHashHistory } from 'vue-router'
import WebGis from '../views/WebGis'
import map from '../views/map'
import console from '../views/console'
import student from '../views/student'

const routes = [
  {
    path: '/',
    name: 'WebGis',
    component: WebGis,
    children: [
      {
        path: '/map',
        name: 'map',
        component: map,
      },
      {
        path: '/student',
        name: 'student',
        component: student,
      },
      {
        path: '/console',
        name: 'console',
        component: console,
      },
    ]
  },

]
const router=createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
