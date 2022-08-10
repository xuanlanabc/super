import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 显示产品的提示信息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
