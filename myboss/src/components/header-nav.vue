<template>
  <div class="header-nav">
    <div class="header-main">
      <div class="header-main-left">
        <span class="hml-title">科大直聘<span v-if="this.$store.state.userInfo.type==1" style="font-size: 16px">（企业版）</span></span>
        <!--<div class="city-part" >-->
            <!--<i></i>-->
            <!--<span>北京</span>-->
            <!--<span>[城市切换]</span>-->
        <!--</div>-->
        <div class="options-part" v-if="this.$store.state.userInfo.type==0">
          <router-link to="/home" :class= "this.$store.state.selectedBar == 0 ? 'active' : '' " @click.native="changeBarTitle(0)">首页</router-link>
          <router-link to="/position"  :class= "this.$store.state.selectedBar == 1 ? 'active' : '' " @click.native="changeBarTitle(1)">职位</router-link>
          <router-link to="/company"  :class= "this.$store.state.selectedBar == 2 ? 'active' : '' " @click.native="changeBarTitle(2)">公司</router-link>
          <router-link to="">APP</router-link>
          <router-link to="">资讯</router-link>
        </div>
        <div class="company-options-part"  v-if="this.$store.state.userInfo.type==1">
          <router-link to="/company/resume/list" style="color:#5dd5c8"><i class="iconfont icon-youxiang"></i>&nbsp;&nbsp;邮件</router-link>
        </div>
      </div>
      <div class="header-main-right" v-if="this.$store.state.userInfo.phone" >
        <router-link to="">消息</router-link>
        <router-link to="/resume" :class= "this.$store.state.selectedBar == 3 ? 'active' : '' "  @click.native="changeBarTitle(3)">简历</router-link>
        <!--<span>.</span>-->
        <!--<router-link to="">上传</router-link>-->
        <router-link to="">付卓宁</router-link>
        <div class="hmr-avatar" >

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "header-nav",
        data()
        {
          return{
             flage:false
          }
        },
        methods:{
          changeBarTitle(index)
          {
            this.$store.commit("CHANGETITLE",index);
          }
        },
        created()
        {

        }
    }
</script>

<style scoped lang="scss">
  $color:#5dd5c8;
  $font-size:16px;

  .header-nav{
    height:60px;
    background-color:#202329;
    .header-main,.company-header-main{
      display:flex;
      justify-content:space-between;
      align-items: center;
      width:1000px;
      height: 100%;
      margin:0 auto;

      .header-main-left {
        display: flex;
        align-items: center;
        .hml-title {
          font-size: 28px;
          font-weight: bolder;
          color: $color;
        }
        .city-part{
          margin-left:18px;
          color:$color;
          font-size: $font-size;

          & span:nth-of-type(2){
            color:#fff;
            font-size: 14px;
          }
        }

        .options-part,.company-options-part{
          a{
            color:#fff;
            font-size: $font-size;
            margin-left:20px;
            text-decoration: none;
            &:hover{
              color:$color;
            }
            &.active
            {
              color:$color !important;
            }
          }

        }

      }
      .header-main-right{
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
        span{
          position: absolute;
          top:40%;
          left:35%;
          transform:translate(-50%,-50%);
          font-size: $font-size;
          color:#fff;

        }
        a{
          color:#fff;
          margin-right:20px;
          font-size: $font-size;
          text-decoration: none;
          &:hover{
            color:$color;
          }
          &.active
          {
            color:$color !important;
          }
        }

        .hmr-avatar{
          display: inline-block;
          width:30px;
          height:30px;
          border-radius:50%;
          background-image: url("https://img2.bosszhipin.com/boss/avatar/avatar_15.png");
          background-size: cover;
          margin-right:15px;
        }
      }
    }
  }

</style>
