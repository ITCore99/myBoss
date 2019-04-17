import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

 const components={
   register:()=>import('@/views/register'),
   home:()=>import('@/views/home'),
   position:()=>import('@/views/position'),
   company:()=>import('@/views/company'),
   positionDetails:()=>import('@/views/positionDetails'),
   companyDetails:()=>import('@/views/companyDetails'),
   resume:()=>import('@/views/resume'),
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
    },
    {
      path:"/position",
      name:'position',
      component:components.position
    },
    {
      path:"/company",
      name:"company",
      component:components.company
    },
    {
      path:"/positionDetail",
      name:"positionDetail",
      component:components.positionDetails
    },
    {
      path:"/companyDetails",
      name:"companyDetail",
      component:components.companyDetails
    },
    {
      path:"/resume",
      name:"resume",
      component:components.resume
    }
  ]
})
