<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view/>
  </div>
</template>

<script>
  import HeaderNav from '@/components/header-nav'
export default {
  name: 'App',
  components:{
    HeaderNav,
  }
}
</script>

<style>
 body,input,button,ul,li,a{
   margin:0;
   padding:0;
 }
 #app{
   width: 100vw;
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
