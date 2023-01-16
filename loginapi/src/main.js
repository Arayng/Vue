import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// firebase
import firebase from 'firebase/compat/app'
import '@/datasource/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    // 사용자가 로그인 액션(로그아웃, 비밀번호 변경 등)을 했을때 실행
    // onAuthStateChanged >> 인증 정보 변경?? 메소드 같음
    firebase.auth().onAuthStateChanged(userInfo => {
      if (userInfo !== null){
        // 로그인 여부 확인
        store.dispatch('loginAuth', userInfo)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
