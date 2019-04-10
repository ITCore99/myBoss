import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

 const components={
   register:()=>import('@/views/register'),
   home:()=>import('@/views/home'),
 }
export default new Router({
  routes: [
    {
      path:"/",
      name:"register",
      component:components.register
    },
    {
      path: '/home',
      name: 'home',
      component: components.home
    }
  ]
})
