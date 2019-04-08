import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

 const components={
   home:()=>import('@/views/home'),
 }
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: components.home
    }
  ]
})
