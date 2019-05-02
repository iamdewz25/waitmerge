/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AdminDash from '@/components/AdminDashBoard'
import UserDashBoard from '@/components/UserDashBoard'
import DataConfig from '@/components/DataConfig'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin',
      name: 'AdminDash',
      component: AdminDash
    },
    {
      path: '/user',
      name: 'UserDashBoard',
      component: UserDashBoard
    },
    {
      path: '/dataconfig',
      name: 'DataConfig',
      component: DataConfig
    },
    
    
    
   
  ]
})
