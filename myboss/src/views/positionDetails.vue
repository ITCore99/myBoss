<template>
  <div>
    <div class="position-detail-container">
      <div class="position-detail-top">
         <div class="position-top-main">
            <div class="position-main-left">
              <div class="pml-title">
                <h1>{{positionData.name}}</h1>
                <span>{{positionData.salary}}k</span>
              </div>
              <div class="pml-require">
                <span>{{positionData.city}}</span>
                <span>{{positionData.handlerWorkExperience}}年</span>
                <span>{{positionData.handerEduction}}</span>
              </div>
              <div class="pml-welfare" >
                <span v-for="item in handlerTeam">{{item}}</span>
              </div>
            </div>
            <div class="position-main-right">
               <div class="pmr-btn">
                  <button>立即沟通</button>
               </div>
               <div class="resume-part">
                 <span><i class="iconfont icon-jianli"></i> 完善在线简历</span>
                 <span>新增简历附件</span>
               </div>
            </div>
         </div>
      </div>
      <!--详情主体-->
      <div class="position-detail-introduce">
        <div class="position-detail-introduce-main">
          <!--招聘人介绍-->
          <div class="pdim-recruiter">
            <div style="display: flex;align-items: center">
              <img src="https://img2.bosszhipin.com/boss/avatar/avatar_15.png?x-oss-process=image/resize,w_100,limit_0"/>
              <div class="recruiter">
                <div>{{positionData.recruiter}}</div>
                <div>{{positionData.recruiterPosition}}</div>
              </div>
            </div>
            <div class="pdimr-reaction"><i class="iconfont icon-shoucang "></i> 感兴趣</div>
            <!--公司简介-->
            <div class="pdim-company-introduce">
              <span>公司基本信息：</span>
              <div>
                <span><i class="iconfont icon-more " ></i>&nbsp;&nbsp;&nbsp;{{positionData.company.name}}</span>
                <span><i class="iconfont icon-zhexian" ></i>&nbsp;&nbsp;&nbsp;不需要融资</span>
              </div>
              <div>
                <span><i class="iconfont icon-yonghu" ></i>&nbsp;&nbsp;&nbsp; 10000人以上</span>
                <span><i class="iconfont icon-jigou" ></i> &nbsp;&nbsp;&nbsp; {{positionData.company.net}}</span>
              </div>
            </div>
          </div>
          <!--职能简介-->
          <div class="Function-introduction">
            <h3 class="Function-title ">职能简介</h3>
            <div class="Function-introduction-content" v-html="hmtlContent">

            </div>
          </div>
          <!--团队介绍-->
          <div class="team-introduction">
            <h3 class="Function-title ">团队介绍</h3>
            <div class="team-introduction-content">
               <span v-for="temp in companyTeam">{{temp}}</span>
            </div>
          </div>
          <!--公司介绍-->
          <div class="company-introduce">
            <h3 class="Function-title ">公司简介</h3>
            <p>{{positionData.company.introduce}} </p>
          </div>
          <!--公司介绍-->
          <div class="Industry-information">
            <h3 class="Function-title ">工商信息</h3>
            <div class="company-introduce-main-wrapper">
              <p>{{positionData.company.name}}</p>
              <div class="company-introduce-main">
                 <div class="company-introduce-item">
                   <span>法人代表：</span>
                   <span>{{businessInfo[0]}}</span>
                 </div>
                <div class="company-introduce-item">
                  <span>注册资金：</span>
                  <span>{{businessInfo[1]}}</span>
                </div>
                <div class="company-introduce-item">
                  <span>成立时间：</span>
                  <span>{{businessInfo[2]}}</span>
                </div>
                <div class="company-introduce-item">
                  <span>企业类型：</span>
                  <span>{{businessInfo[3]}}</span>
                </div>
                <div class="company-introduce-item">
                  <span>经营状态：</span>
                  <span>{{businessInfo[4]}}</span>
                </div>
              </div>
            </div>
          </div>
          <!--工作地址-->
          <div class="job-address">
            <h3 class="Function-title ">工作地址</h3>
            <p>{{positionData.company.address}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--底部footer-->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
    import footerNav from "../components/footerNav"
    export default {
        name: "positionDetails",
        data()
        {
          return{
            hmtlContent:"",//职能要求
            handlerTeam:[],//团队福利
            positionId:"",//存放职位id
            positionData:"" ,
            businessInfo:[],//工商信息
            companyTeam:[],//公司团队

          }
        },
        methods:{
          getPositionDetails(id)
          {
            this.$axios.get(`position/positionDetail/${id}`).then(res=>{
              //console.log("res",res);
              if(res.code==200)
              {
                let handlerWorkExperience="",
                    handerEduction="",
                    handlerFancing="",
                    handlerScale="";
                switch (res.data.workExperience)
                {
                  case "0" :
                    handlerWorkExperience="应届生";
                    break;
                  case "1" :
                    handlerWorkExperience="1-3";
                    break;
                  case "2" :
                    handlerWorkExperience="3-5";
                    break;
                  case "3" :
                    handlerWorkExperience="5-10";
                    break;
                  case "4" :
                    handlerWorkExperience="10+";
                    break;
                };
                switch (res.data.education)
                {
                  case "0" :
                    handerEduction="专科";
                    break;
                  case "1" :
                    handerEduction="本科";
                    break;
                  case "2" :
                    handerEduction="硕士";
                    break;
                  case "3" :
                    handerEduction="博士";
                    break;
                  case "4" :
                    handerEduction="博士以上";
                    break;
                };
                switch (res.data.company.financing)
                {
                  case "0" :
                    handlerFancing="未融资";
                    break;
                  case "1" :
                    handlerFancing="天使轮";
                    break;
                  case "2" :
                    handlerFancing="A轮";
                    break;
                  case "3" :
                    handlerFancing="B轮";
                    break;
                  case "4" :
                    handlerFancing="C轮";
                    break;
                  case "5" :
                    handlerFancing="D轮";
                    break;
                  case "6" :
                    handlerFancing="已上市";
                    break;
                  case "7" :
                    handlerFancing="不需要融资";
                    break;
                }
                switch (res.data.company.scale)
                {
                  case "0" :
                    handlerScale="0-20人";
                    break
                  case "1" :
                    handlerScale="20-99人";
                    break;
                  case "2" :
                    handlerScale="100-499人";
                    break;
                  case "3" :
                    handlerScale="500-999";
                    break;
                  case "4" :
                    handlerScale="10000人以上"
                    break;
                }
                res.data.handlerWorkExperience=handlerWorkExperience;
                res.data.handerEduction=handerEduction;
                res.data.handlerFancing=handlerFancing;
                res.data.handlerScale=handlerScale;
                this.positionData=res.data;
                this.hmtlContent=res.data.Function;
                this.handlerTeam=res.data.team.split("，");
                this.businessInfo=res.data.company.business.split("，");
                this.companyTeam=res.data.company.team.split("，");
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("拉取数据错误，请检查你的网络")
            })
          }
        },
        components:{
          footerNav
        },
        created()
        {
          //console.log("id",this.$route.query.id);
          this.positionId=this.$route.query.id;
          this.getPositionDetails(this.$route.query.id);
        }
    }
</script>

<style scoped lang="scss">
  .position-detail-container
  {
    //顶部
    .position-detail-top
    {
      background-color: #444C60;
      .position-top-main
      {
        display: flex;
        width:1000px;
        height: 100%;
        padding:24px 0;
        margin:0 auto;
        justify-content: space-between;
        .position-main-left
        {
          .pml-title
          {
            display: flex;
            align-items: center;
            h1{
              color:#fff;
            }
            span
            {
              margin-left:20px;
              font-size: 30px;
              color:#FA6A43;
            }
          }
          .pml-require
          {
            font-size: 14px;
            color:rgba(255,255,255,.7);
            span
            {
              padding:0 10px;
              border-right:1px solid rgba(255,255,255,.5);

            }
            span:nth-of-type(1)
            {
              padding-left:0;
            }
          }
          .pml-welfare
          {
            display: flex;
            margin-top:20px;
            span{
              display: inline-block;
              margin-right:15px;
              padding:5px 5px;
              font-size: 12px;
              color:#5ED5C8;
              border:1px solid #5ED5C8;
              border-radius: 15px;
            }
          }
        }
        .position-main-right
        {
          .pmr-btn
          {
            margin-top:25px;
            button{
              outline: none;
              border:none;
              width: 300px;
              height: 45px;
              background-color: #5DD5C8;
              font-size: 16px;
              color:#fff;
            }
          }
          .resume-part
          {
            display: flex;
            justify-content: space-between;
            margin-top:60px;
            color: #5DD5C8;
            font-size: 16px;
            span{
              //border: 1px  solid green;
            }
            .icon-jianli
            {
              //border:1px solid red;
            }

          }
        }
      }
    }
    //中间要求以及介绍
    .position-detail-introduce
    {
      width: 1000px;
      margin: 20px auto;
      //border:1px solid #aaa;
      .position-detail-introduce-main
      {
        //招聘人简介
        .pdim-recruiter
        {
          display: flex;
          justify-content: space-between;
          align-items: center;
          //border:1px solid #aaa;
          img
          {
            width:73px;
            height: 73px;
            border-radius: 50%;
            margin-right:20px;
          }
          .recruiter
          {
            div:nth-of-type(1)
            {
              font-size: 20px;
              color:#424A5E;
            }
            div:nth-of-type(2)
            {
              margin-top:8px;
              font-size: 14px;
              color:#9FA3AF;
            }
          }
          .pdimr-reaction
          {
            color:#9FA3B0;
            &:hover
            {
              color: #5DD5C8;
            }
          }

        }
        //公司基本信息
        .pdim-company-introduce
        {
           display: flex;
           align-items: center;
           height: 73px;
           //border:1px solid red;
           span
           {
             display: block;
             font-size: 14px;
             color:#414A60;
           }
          span:nth-of-type(1)
          {
            margin-right: 20px;
          }
           div:nth-of-type(1),div:nth-of-type(2)
           {
             margin-right: 20px;
             //border: 1px solid #aaa;
             span:nth-of-type(2)
             {
               margin-top: 10px;
             }
           }
          i{
            color:#9FA3B0;
          }
        }
        //职能简介去
        .Function-introduction,.team-introduction,.company-introduce,.Industry-information,.job-address
        {
          .Function-title
          {
            font-size: 15px;
            font-weight: bold;
            color:#424A5E;
            &::after
            {
              display: block;
              content: "";
              width: 1.5em;
              height: 2px;
              margin-top:8px;
              background-color: #5ED5C8;
            }
          }
          .Function-introduction-content
          {
            font-size: 14px;
            color:#61687C;
            ol{
              li{
                margin-top:20px !important;
              }
            }
          }
        }
        //团队介绍
        .team-introduction
        {
          .team-introduction-content
          {
             span{
               font-size: 12px;
               color:#9FA3AF;
               padding:4px 12px;
               margin:0 15px 10px 0;
               border: 1px #d1d4da solid;;
               border-radius: 15px;
             }
          }
        }
        //公司简介
        .company-introduce
        {
          p{
            font-size: 14px;
            color:#61687C;
          }
        }
        //工商信息
        .Industry-information
        {
          .company-introduce-main-wrapper
          {
            p {
              font-size: 14px;
              color:#414A60;
            };
            .company-introduce-main
            {
              display: flex;
             // border: 1px solid #aaa;
              .company-introduce-item
              {
                width:calc(100% / 5);
                //border: 1px solid #aaa;
                span:nth-of-type(1)
                {
                  font-size: 14px;
                  color:#8D92A1;
                }
                span:nth-of-type(2)
                {
                  font-size: 14px;
                  color:#414A60;
                }
              }
            }
          }
        }
        //工作地址
        .job-address
        {
          font-size: 14px;
          color:#414A60;
        }
      }

    }
  }


</style>
