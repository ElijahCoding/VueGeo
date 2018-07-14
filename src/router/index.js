import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import Singup from '@/components/auth/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
  },

  {
    path: '/signup',
    name: 'Singup',
    component: Singup
  }
 ]
})
