import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
})

export default router
