import Vue from 'vue'
import Router from 'vue-router'

// 라우터에 연결할 main, sub page 컴포넌트 모듈 가져오기

import HelloWorld from './components/HelloWorld.vue'
import mainPage from './components/mainPage.vue'
import subPage from './components/subPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/main',
      component: mainPage
    },
    {
      path: '/sub',
      component: subPage
    }
  ]
})