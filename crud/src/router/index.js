import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '@/components/Read.vue'
import Create from '@/components/Create.vue'
import Detail from '@/components/Detail.vue'
import Error from '@/components/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Read',
    component: Read
  },
  {
    path: '/create/:id?',
    name: 'create',
    component: Create
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
  },
  {
    path: '*',
    name: 'error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
