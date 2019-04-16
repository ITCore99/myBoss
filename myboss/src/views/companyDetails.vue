<template>
    <div class="companyDetails-container">
      <div class="companyDetails-top">
        <div class="companyDetails-top-main">
          <!--左半部分区-->
          <div class="companyDetails-top-left">
            <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20190221/35ac1752b0590f2084febfa7410487408bf8a6ce229014626bb7baabb31717e5.jpg?x-oss-process=image/resize,w_120,limit_0"/>
            <div class="ctl-info">
                <div class="ctl-info-title">今日头条</div>
                <div class="ctl-info-tags">
                  <span>不需要融资</span>
                  <span>10000人以上</span>
                  <span>移动互联网</span>
                </div>
            </div>
          </div>
          <!--有右半部分区-->
          <div class="companyDetails-top-right">
             <div class="ctr-left">
                <div class="number-of-position">
                    9307
                </div>
                <div class="position-text">
                  在招职位
                </div>
             </div>
          </div>
        </div>
      </div>
      <!--热招职位-->
      <div class="hot-position-party">
         <div class="hot-position-wrapper">
           <div class="hot-position-header">
             <h3>热招职位</h3>
             <span class="hot-position-more" @click="goPosition">查看全部的9317个职位</span>
           </div>
           <div class="hot-position-item-wrapper">
                 <div class="hot-position-item"  v-for="item in listData" @click="goPositionDetail" >
                    <div class="hot-position-item-left">
                       <span>web前端工程师</span>
                       <span>1-3年&nbsp;&nbsp;|&nbsp;&nbsp;本科&nbsp;&nbsp;|&nbsp;&nbsp;北京 </span>
                    </div>
                    <div class="hot-position-item-right">
                      10K-20K
                    </div>
                 </div>
           </div>
         </div>
      </div>
      <!--公司详情主体-->
       <div class="company-details-main">
         <div class="company-details-main-wrapper">
           <!--高管介绍-->
           <div class="Function-introduction">
             <h3 class="Function-title ">高管介绍</h3>
             <div class="top-manager-info">
                <div class="img-wrapper">
                   <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20190331/16dcf0802e8d7f89d6359796df4c263c357629e26750e077a33fbe1e7139b9e1.jpg?x-oss-process=image/resize,w_100,limit_0"/>
                   <div class="ceo-info">
                     <span>张一鸣</span>
                     <span>CEO</span>
                   </div>
                </div>
                <p>张一鸣，男，1983年出生于福建龙岩，北京字节跳动科技有限公司创始人、CEO，今日头条创始人、原CEO。该公司推出了基于数据挖掘的推荐引擎产品“今日头条”和内涵段子、火山小视频、抖音、悟空问答等产品。</p>
             </div>
           </div>
           <!--公司介绍-->
           <div class="company-introduction">
             <h3 class="Function-title ">公司介绍</h3>
             <div class="company-introduce-main">
               今日头条，抖音是北京字节跳动科技有限公司开发的一款基于数据挖掘的推荐引擎产品，为用户推荐信息，提供连接人与信息的服务的产品。由张一鸣于2012年3月创建，2012年8月发布第一个版本。 [1]
               2016年9月20日，今日头条宣布投资10亿元用以补贴短视频创作。后独立孵化 UGC 短视频平台火山小视频 [2] 。2017年1月，今日头条中国新第一批认证的8组独立音乐人入驻今日头条。2017年2月2日，全资收购美国短视频应用Flipagram
             </div>
           </div>
           <!--产品介绍-->
           <div class="product-introduction">
             <h3 class="Function-title ">产品介绍</h3>
             <div class="product-introduction-main">
               <div class="product-introduction-item" v-for="item in listData2">
                 <img class="pii-img" src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20190331/7e9bedad4e2ef8aee184385f3cb401b9357629e26750e077a33fbe1e7139b9e1.jpg?x-oss-process=image/resize,w_100,limit_0" />
                 <div class="pii-right">
                   <span>抖音短视频&nbsp;&nbsp;|&nbsp;&nbsp;记录你的美好生活</span>
                   <span>http://www.douyin.com</span>
                 </div>
               </div>
             </div>
           </div>
           <!--公司地址-->
           <div class="address-introduction">
             <h3 class="Function-title ">公司地址</h3>
              <p>北京市海定区中航广场</p>
           </div>
         </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "companyDetails",
        data()
        {
          return{
            listData:[1,2,3,4],
            listData2:[0,1,2]
          }
        },
      methods:{

          goPosition()
          {
            this.$router.push({path:"/position",query:{
              id:"今日头条"
              }})
          },
          goPositionDetail()
          {
            this.$router.push({path:"/positionDetail",query:{
              id:"12345598878"
              }})
          }
      }
    }
</script>

<style scoped lang="scss">
  .companyDetails-container
  {
    //公司详情顶部
    .companyDetails-top
    {
      height:100px;
      padding:28px 0 29px 0;
      background-color: #444C5F;
      .companyDetails-top-main
      {
         display: flex;
         justify-content:space-between;
         align-items: center;
        //border:1px solid red;
         width:1200px;
         margin:0 auto;
         //顶部左半部分
         .companyDetails-top-left
         {
           display: flex;
           //border:1px solid #fff;
           img{
             width: 103px;
             height: 103px;
             border-radius: 10px;
           }
           .ctl-info
           {
             display: flex;
             flex-direction: column;
             justify-content: space-around;
             margin-left:20px;
             .ctl-info-title
             {
               font-size: 32px;
               color:#fff;
             }
             .ctl-info-tags
             {
               font-size: 14px;
               color:rgba(255,255,255,0.7);
               span{
                 padding:0 8px;
               }
               span:nth-of-type(1),span:nth-of-type(2)
               {
                 border-right:1px solid rgba(255,255,255,0.5);
               }
             }
           }
         }
        //顶部右半部分
        .companyDetails-top-right
        {
          height: 100%;
          margin-right: 50px;
          //border: 1px solid green;
          .ctr-left
          {
             display: flex;
             height: 100%;
             flex-direction: column;
             justify-content: space-between;
             align-items: center;
            // border:1px solid #fff;
            .number-of-position
            {
              font-size: 36px;
              color:#fff;
              margin-bottom:15px;
            }
            .position-text
            {
              font-size: 14px;
              color:#fff;
            }
          }
        }
      }
    }
    //热招职位区
    .hot-position-party
    {
      margin-top:20px;
      .hot-position-wrapper
      {
         width: 1200px;
         margin:0 auto;
      //   border:1px solid #aaa;
        .hot-position-header
        {
          display: flex;
          justify-content:space-between;
          h3{
            margin: 0;
            font-weight: normal;
            font-size: 16px;
            color:#414A60;

          }
          .hot-position-more
          {
            font-size: 14px;
            color:#9FA3B0;
            &:hover
            {
              color:#18C3B1;
            }
          }
        }
        .hot-position-item-wrapper
        {
          display: flex;
          justify-content: space-between;
          margin:15px 0;
          .hot-position-item
          {
             display: flex;
             justify-content: space-between;
             width:20%;
             box-sizing: border-box;
             padding:19px 20px 17px;
             background-color: #fff;
             .hot-position-item-left
             {
               display: flex;
               flex-direction: column;
               justify-content:space-between;
               span:nth-of-type(1)
               {
                 padding:0 0 10px ;
                 font-size: 16px;
                 color:#414A60;
               }
               span:nth-of-type(2)
               {
                 font-size: 14px;
                 color:#9FA3AF;
               }
             }
            .hot-position-item-right
            {
              font-size: 16px;
              color:#FC703E;
            }
            &:hover .hot-position-item-left
            {
              span:nth-of-type(1)
              {
                color:#18C3B1;
              }
            }
          }
        }
      }
    }
    //公司详情主体区
    .company-details-main
    {
       background-color:#fff;
       padding:15px 0;
       margin-bottom: 15px;
      .company-details-main-wrapper
      {
        width: 1200px;
        margin:0 auto;
        .Function-introduction,.company-introduction,.product-introduction,.address-introduction
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
          .top-manager-info
          {
            .img-wrapper
            {
              display: flex;
              align-items: center;
              width: 30%;
              img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
              }
              .ceo-info
              {
                display: flex;
                margin-left:20px;
                flex-direction: column;
                justify-content: space-around;
                span:nth-of-type(1)
                {
                  font-size: 20px;
                  color:#414A60;
                }
                span:nth-of-type(2)
                {
                  font-size: 16px;
                  color:#414A60;
                }
              }
            }
            p{
              font-size: 14px;
              color:#61687C;
            }
          }
        }
        //公司简介
        .company-introduction
        {
          .company-introduce-main
          {
            font-size: 14px;
            color:#61687C;
          }
        }
        //产品介绍
        .product-introduction
        {
          .product-introduction-main
          {
            .product-introduction-item
            {
              display: flex;
              margin-bottom: 15px;
              .pii-img
              {
                width: 60px;
                height: 60px;
                margin-right: 15px;
              }
              .pii-right
              {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                font-size: 16px;
                color:#414A60;
                span:nth-of-type(2)
                {
                  font-size: 14px;
                  color:#9FA3AF;
                }

              }

            }
          }
        }
        //地址介绍
        .address-introduction
        {
          p{
            font-size: 14px;
            color:#424A5E;
          };
        }
      }


    }
  }
</style>
