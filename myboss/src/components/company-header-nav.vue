<template>
  <div class="header-nav">
    <div class="header-main">
      <div class="header-main-left">
        <span class="hml-title">科大直聘</span>
        <div class="city-part" v-if="false">
          <i></i>
          <span>北京</span>
          <span>[城市切换]</span>
        </div>
        <div class="options-part">
          <router-link to="/home" :class= "this.$store.state.selectedBar == 0 ? 'active' : '' " @click.native="changeBarTitle(0)">首页</router-link>
          <router-link to="/position"  :class= "this.$store.state.selectedBar == 1 ? 'active' : '' " @click.native="changeBarTitle(1)">职位</router-link>
          <router-link to="/company"  :class= "this.$store.state.selectedBar == 2 ? 'active' : '' " @click.native="changeBarTitle(2)">公司</router-link>
          <router-link to="">APP</router-link>
          <router-link to="">资讯</router-link>
        </div>
      </div>
      <div class="header-main-right" v-if="this.$store.state.userInfo.phone" >
        <router-link to="">消息</router-link>
        <router-link to="/resume" :class= "this.$store.state.selectedBar == 3 ? 'active' : '' "  @click.native="changeBarTitle(3)">简历</router-link>
        <!--<span>.</span>-->
        <!--<router-link to="">上传</router-link>-->
        <router-link to="">付卓宁</router-link>
        <div class="hmr-avatar">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "company-header-nav"
    }
</script>

<style scoped>

</style>
