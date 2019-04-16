<template>
    <div class="position-detail-container">
      <div class="position-detail-top">
         <div class="position-top-main">
            <div class="position-main-left">
              <div class="pml-title">
                <h1>后端开发工程师-EA</h1>
                <span>18K-25K*15薪</span>
              </div>
              <div class="pml-require">
                <span>北京</span>
                <span>3-5年</span>
                <span>本科</span>
              </div>
              <div class="pml-welfare">
                <span>五险一金</span>
                <span>医疗保险</span>
                <span>定期检查</span>
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
                <div>张先生</div>
                <div>人事经理</div>
              </div>
            </div>
            <div class="pdimr-reaction"><i class="iconfont icon-shoucang "></i> 感兴趣</div>
            <!--公司简介-->
            <div class="pdim-company-introduce">
              <span>公司基本信息：</span>
              <div>
                <span><i class="iconfont icon-more " ></i>&nbsp;&nbsp;&nbsp;字节跳动</span>
                <span><i class="iconfont icon-zhexian" ></i>&nbsp;&nbsp;&nbsp;不需要融资</span>
              </div>
              <div>
                <span><i class="iconfont icon-yonghu" ></i>&nbsp;&nbsp;&nbsp; 10000人以上</span>
                <span><i class="iconfont icon-jigou" ></i> &nbsp;&nbsp;&nbsp; http://www.bytedance.com</span>
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
               <span>美女如云</span>
               <span>公司氛围好</span>
               <span>地铁周边</span>
            </div>
          </div>
          <!--公司介绍-->
          <div class="company-introduce">
            <h3 class="Function-title ">公司简介</h3>
            <p>北京立思辰科技股份有限公司(以下简称“立思辰”)，创立于1999年1月8日。总部位于北京，并在上海、广州、成都、沈阳、南京等20余个城市设立分、子公司。 2009年10月，立思辰成为中国创业板首批上市企业之一，于深交所发行上市, 股票代码(SZ300010)。秉承“厚德载物、自强不息”的发展理念，立思辰把握历史机遇，
              持续创新，历经十几年稳健增长，旗下业务现已发展形成两大产业集团：教育集团与信息安全科技集团。 </p>
          </div>
          <!--公司介绍-->
          <div class="Industry-information">
            <h3 class="Function-title ">工商信息</h3>
            <div class="company-introduce-main-wrapper">
              <p>中文未来教育科技（北京）有限公司</p>
              <div class="company-introduce-main">
                 <div class="company-introduce-item">
                   <span>法人代表：</span>
                   <span>窦昕</span>
                 </div>
                <div class="company-introduce-item">
                  <span>注册资金：</span>
                  <span>8000万人民币</span>
                </div>
                <div class="company-introduce-item">
                  <span>成立时间：</span>
                  <span>2015-05-18</span>
                </div>
                <div class="company-introduce-item">
                  <span>企业类型：</span>
                  <span>有限责任公司（法人独资）</span>
                </div>
                <div class="company-introduce-item">
                  <span>经营状态：</span>
                  <span>开业</span>
                </div>
              </div>
            </div>
          </div>
          <!--工作地址-->
          <div class="job-address">
            <h3 class="Function-title ">工作地址</h3>
            <p>北京市海定区鲤城大厦</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "positionDetails",
        data()
        {
          return{
            hmtlContent:"<p>岗位职责：</p><ol><li>负责社区产品的前端开发，包括web、wap站及小程序等产品；&nbsp;&nbsp;</li><li>应用新技术，设计开发极具用户体验的前端应用；&nbsp;<span style=\"font-weight: bold;\"></span></li></ol><p>任职要求：</p><ol><li>与产品、后端沟通，协同进行前后端分离的开发模式。&nbsp;&nbsp;&nbsp;</li><li>深刻理解Web标准，对可用性、稳定性、可访问性等相关知识有实际的了解和实践经验，具有模块化编程 思想、良好的代码书写习惯；&nbsp;</li><li>3年以上前端开发经验，对前端工程化和组件化有较深的理解；&nbsp;</li><li>&nbsp;逻辑思维和学习能力强，较强的沟通协作能力，具有团队合作精神。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></li></ol>"
          }
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
        width:1200px;
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
      width: 1200px;
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
