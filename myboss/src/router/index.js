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
   companyResumeShow:()=>import('@/views/company-resume-show'),
   resumeShow:()=>import('@/views/resume-show'),
   interviewList:()=>import('@/views/interview-list'),
   interviewShow:()=>import('@/views/interview-show'),
   companyInfoSupplement:()=>import('@/views/component-info-supplement'),
   positionPublish:()=>import('@/views/positionPublish')
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
    },
    {
      path:"/company/resume/list",
      name:"companyResumeList",
      component:components.companyResumeShow,
    },
    {
      path:"/look/resume",
      name:"resume-show",
      component:components.resumeShow
    },
    {
      path:"/interview/list",
      name:"interview-list",
      component:components.interviewList,
    },
    {
      path:"/interview/show",
      name:"interview-show",
      component:components.interviewShow
    },
    {
      path:"/company/info/supplement",
      name:"component-info-supplement",
      component:components.companyInfoSupplement,
    },
    {
      path:"/position/publish",
      name:"position-publish",
      component:components.positionPublish
    }
  ]
})
