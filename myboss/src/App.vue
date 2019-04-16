<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view/>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
  import HeaderNav from '@/components/header-nav';
  import  FooterNav   from '@/components/footerNav'
export default {
  name: 'App',
  components:{
    HeaderNav,
    FooterNav,
  }
}
</script>

<style>
 body,input,button,ul,li,a{
   margin:0;
   padding:0;
 }
  body{
    background-color: #f6f6f8;
  }
  ul{
    list-style: none;
  }
  img{
    vertical-align: middle;
  }
  a{
    text-decoration: none;
  }
</style>
