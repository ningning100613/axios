import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Http from './service/http'

Vue.config.productionTip = false
//Http挂载到实例上
Vue.prototype.$Http = Http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
