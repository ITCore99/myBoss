<template>
  <div>
    <div class="companyDetails-container">
      <div class="companyDetails-top">
        <div class="companyDetails-top-main">
          <!--左半部分区-->
          <div class="companyDetails-top-left">
            <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20190221/35ac1752b0590f2084febfa7410487408bf8a6ce229014626bb7baabb31717e5.jpg?x-oss-process=image/resize,w_120,limit_0"/>
            <div class="ctl-info">
                <div class="ctl-info-title">{{companyData.name}}</div>
                <div class="ctl-info-tags">
                  <span>{{companyData.handlerFancing}}</span>
                  <span>{{companyData.handlerScale}}</span>
                  <span>{{companyData.industry.name}}</span>
                </div>
            </div>
          </div>
          <!--有右半部分区-->
          <div class="companyDetails-top-right">
             <div class="ctr-left">
                <div class="number-of-position">
                    {{companyAllPositions.length}}
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
             <span class="hot-position-more" @click="goPosition" v-if="companyAllPositions.length > 4">查看全部的&nbsp;&nbsp;{{companyAllPositions.length}}&nbsp;&nbsp;个职位</span>
           </div>
           <div class="hot-position-item-wrapper">
                 <div class="hot-position-item"  v-for="temp in companyAllPositions" @click="goPositionDetail"  :data-id="temp._id">
                    <div class="hot-position-item-left" >
                       <span>{{temp.name}}</span>
                       <span>{{temp.handlerWorkExperience}}年&nbsp;&nbsp;|&nbsp;&nbsp;{{temp.handerEduction}}&nbsp;&nbsp;|&nbsp;&nbsp;{{temp.city}} </span>
                    </div>
                    <div class="hot-position-item-right">
                      {{temp.salary}}K
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
                   <img :src="companyData.ceo.avatar"/>
                   <div class="ceo-info">
                     <span>{{companyData.ceo.name}}</span>
                     <span>{{companyData.ceo.position}}</span>
                   </div>
                </div>
                <p>{{companyData.ceo.desc}}</p>
             </div>
           </div>
           <!--公司介绍-->
           <div class="company-introduction">
             <h3 class="Function-title ">公司介绍</h3>
             <div class="company-introduce-main">
               {{companyData.introduce}}
             </div>
           </div>
           <!--产品介绍-->
           <div class="product-introduction" v-if="productsData.length > 0">
             <h3 class="Function-title ">产品介绍</h3>
             <div class="product-introduction-main">
               <div class="product-introduction-item" v-for="element in productsData">
                 <img class="pii-img" :src="element.img" />
                 <div class="pii-right">
                   <span>{{element.name}}&nbsp;&nbsp;|&nbsp;&nbsp;{{element.desc}}</span>
                   <span v-if="element.net">{{element.net}}</span>
                 </div>
               </div>
             </div>
           </div>
           <!--公司地址-->
           <div class="address-introduction">
             <h3 class="Function-title ">公司地址</h3>
              <p>{{companyData.address}}</p>
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
        name: "companyDetails",
        data()
        {
          return{
            companyId:"",
            companyData:"",
            companyAllPositions:[],
            productsData:[],
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
          goPositionDetail(event)
          {
            let id = event.currentTarget.dataset.id;
            this.$router.push({path:"/positionDetail",query:{
              id
              }});
            this.$store.commit("CHANGETITLE",1);
          },
          getCompanyDetailData()
          {
            this.$axios.get(`company/companyDetail/${this.companyId}`).then(res=>{
              if(res.code==200)
              {
                let handlerFancing="";
                let handlerScale="";
                switch (res.data.financing)
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
                switch (res.data.scale)
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
                res.data.handlerFancing=handlerFancing;
                res.data.handlerScale=handlerScale;
                this.companyData=res.data;

              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("拉取数据失败，请检查网络连接")
            })
          },
          getCompanyAllPositions()
          {
            this.$axios.get(`position/company/${this.companyId}`).then(res=>{
              if(res.code==200)
              {
                if(res.data.length)
                {
                  res.data.forEach(item=>{
                    let  handlerWorkExperience="";
                    let  handerEduction="";
                    switch (item.workExperience)
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
                    switch (item.education)
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
                    item.handlerWorkExperience=handlerWorkExperience;
                    item.handerEduction=handerEduction;
                  });
                  this.companyAllPositions=res.data;
                }
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("数据获取失败，请检查网络连接")
            })
          },
          getCompanyAllProducts()
          {
            this.$axios.get(`prod/company/${this.companyId}`).then(res=>{
              if(res.code==200)
              {
                if(res.data.length)
                {
                  this.productsData=res.data;
                }
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据错误,请检查网络连接")
            })
          }
      },
      components: {
        footerNav
      },
      created(){
          console.log("id",this.$route.query.id);
          this.companyId=this.$route.query.id;
          this.getCompanyDetailData();
          this.getCompanyAllPositions();
          this.getCompanyAllProducts();
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
         width:1000px;
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
         width: 1000px;
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
          margin:15px 0;
          .hot-position-item
          {
             display: flex;
             justify-content: space-between;
             width:25%;
             margin-left: 25px;
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
        width: 1000px;
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
