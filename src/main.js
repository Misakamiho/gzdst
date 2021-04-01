import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import '@/styles/index.less'
import 'normalize.css'

import router from '@/router/router.js'
Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  var token = localStorage.getItem('islogin')
  if (token || to.path === '/login') {
    next()
  } else if (!token && to.path !== '/login') {
    next({ name: 'login' })
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
