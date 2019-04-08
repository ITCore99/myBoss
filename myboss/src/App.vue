<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <div class="appMainWrapper">
      <router-view/>
    </div>
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
  body{
    background-color: #f6f6f8;
  }
  ul{
    list-style: none;
  }
  img{
    vertical-align: middle;
  }
  .appMainWrapper
  {
    width:1247px;
    margin:0 auto;
    border:1px solid #ddd;
  }
</style>
