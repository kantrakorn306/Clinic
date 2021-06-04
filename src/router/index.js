import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Timeline from '../views/Timeline.vue'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.use(VueRouter)
Vue.component('apexchart', VueApexCharts)
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
