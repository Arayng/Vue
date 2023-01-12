import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import {rtdbPlugin} from 'vuefire'

Vue.config.productionTip = false
Vue.use(rtdbPlugin)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
