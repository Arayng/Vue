import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import firebase from 'firebase/compat/app'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'start',
  //   component: () => import('../components/start.vue')
  // },
  // {
  //   path: '/main',
  //   name: 'main',
  //   component: () => import('../components/main.vue')
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../components/login.vue')
  // },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: () => import('../components/register.vue')
  // },
  // {
  //   path: '/*',
  //   name: 'error',
  //   component: () => import('../components/error.vue')
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //router 이동에 개입하여 firebase.auth가 필요한 경우 login 페이지로 전환
  const needAuth = to.matched.some(record => record.meta.bAuth)
  const checkAuth = firebase.auth().currentUser
  if(needAuth && !checkAuth){
    next('/login')
  } else {
    next()
  }
})

export default router
