<template>
  <div class="header-nav">
    <div class="header-main">
      <div class="header-main-left">
        <span class="hml-title">科大直聘<span v-if="this.$store.state.userInfo.type==1" style="font-size: 16px">（企业版）</span></span>
        <div class="options-part" v-if="this.$store.state.userInfo.type==0">
          <router-link to="/home" :class= "this.$store.state.selectedBar == 0 ? 'active' : '' " @click.native="changeBarTitle(0)">首页</router-link>
          <router-link to="/position"  :class= "this.$store.state.selectedBar == 1 ? 'active' : '' " @click.native="changeBarTitle(1)">职位</router-link>
          <router-link to="/company"  :class= "this.$store.state.selectedBar == 2 ? 'active' : '' " @click.native="changeBarTitle(2)">公司</router-link>
          <router-link to="">APP</router-link>
          <router-link to="">资讯</router-link>
        </div>
        <div class="company-options-part"  v-if="this.$store.state.userInfo.type==1">
          <router-link to="/company/resume/list"  :class= "this.$store.state.selectedBar == 6 ? 'active' : '' " @click.native="changeBarTitle(6)"><i class="iconfont icon-icon-test "></i>&nbsp;&nbsp;简历箱<span class="nums" v-show="redDots > 0">{{redDots}}</span> </router-link>
        </div>
      </div>
      <div class="header-main-right" v-if="this.$store.state.userInfo.phone" >
        <router-link to="/interview/list" :class= "this.$store.state.selectedBar == 4 ? 'active' : '' " @click.native="changeBarTitle(4)">消息<span v-show="interviewRedDots > 0" class="nums">{{interviewRedDots}}</span></router-link>
        <router-link to="/resume" :class= "this.$store.state.selectedBar == 3 ? 'active' : '' "  @click.native="changeBarTitle(3)">简历</router-link>
        <!--<span>.</span>-->
        <!--<router-link to="">上传</router-link>-->
        <router-link to="">{{this.$store.state.userInfo.username}}</router-link>
        <div class="hmr-avatar" >
        </div>
      </div>
      <div class="company-header-main-right" v-if="this.$store.state.userInfo.type==1">
        <router-link to="/position/publish" v-if="publishFlage" :class= "this.$store.state.selectedBar == 7 ? 'active' : '' "  @click.native="changeBarTitle(7)">职位发布</router-link>
        <router-link to="/company/info/supplement" :class= "this.$store.state.selectedBar == 5 ? 'active' : '' "  @click.native="changeBarTitle(5)">完善信息</router-link>
        <router-link to="">{{this.$store.state.userInfo.username}}</router-link>
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
             flage:false,
             redDots:0,
             interviewRedDots:0,
             companyId:"",
             publishFlage:false,//公司信息未完善时不能发布职位
          }
        },
        methods:{
          changeBarTitle(index)
          {
            this.$store.commit("CHANGETITLE",index);
          },
          /**
           * 获取简历投递红点数
           */
          getRedDots(id)
          {
            this.$axios.get(`deliver/noRead/count/${id}`).then(res=>{
              console.log("红点四",res);
              if(res.code==200)
              {
                  this.redDots=res.data;
              }else{
                this.$message.info(res.msg);
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("数据获取错误，请检查网络连接！")
            })
          },
          /**
           * 获取面试红点数
           */
          getInterviewRedDots()
          {
            this.$axios.get(`sponsorInterview/noRead/count/${this.$store.state.userInfo.id}`).then(res=>{
              if(res.code==200)
              {
                 this.interviewRedDots=res.data;
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败，请检查网络连接！")
            })
          },
          /***
           * 获取公司的id
           */
          getCompanyId()
          {
             this.$axios.get("company/select/email",{email:this.$store.state.userInfo.email}).then(res=>{
               console.log("id",res);
               if(res.code=200)
               {
                 if(res.data.length>0)
                 {
                     this.companyId=res.data[0]._id;
                     this.$store.commit('CHANGECOMPANYID',res.data[0]._id);
                     this.getRedDots(res.data[0]._id);
                     this.publishFlage=true;

                 }else{
                   this.$message.info("你还没有完善公司信息请先去完善！");
                   this.publishFlage=false;
                 }
               }else{
                 this.$message.info(res.msg);
               }
             }).catch(err=>{
               console.log(err);
               this.$message.error("获取数据失败，请检查网络连接！")
             })
          },
        },

         created()
        {
         // this.getCompanyId();
          //this.getInterviewRedDots()
        },
        watch:{
          $route(to,from){
            switch (to.name)
            {
              case "companyResumeList" :
              case "component-info-supplement"  :
              case "position-publish"  :
              case "resume-show"  :
                this.getCompanyId();
                break;
              case "home"  :
              case "interview-list" :
              case "interview-show" :
                  this.getInterviewRedDots()
                  break;
            }
          }
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
            position: relative;
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
            .nums{
              position: relative;
              top:-10px;
              left:2px;
              display: inline-block;
              font-size: 12px;
              background-color: red;
              color:#fff;
              border-radius: 8px;
              padding:0px 8px 1px;
            }
          }

        }


      }
      .header-main-right,.company-header-main-right{
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
          position: relative;
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
          .nums{
            position: relative;
            top:-10px;
            left:2px;
            display: inline-block;
            font-size: 12px;
            background-color: red;
            color:#fff;
            border-radius: 8px;
            padding:0px 8px 1px;
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
