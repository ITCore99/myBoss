<template>
 <div>
   <div class="company-party-container">
       <div class="company-main-wrapper">
          <!--顶部筛选区-->
          <div class="filter-part">
              <div class="filter-address">
                <div class="filter-title">公司地点：</div>
                <ul @click="Filter">
                  <li v-for="(item,index) in addressList" :data-value="item" :data-index="index" :data-flage="0" :class="addressClickIndex==index ? 'active' : '' ">{{item}}</li>
                </ul>
              </div>
              <div class="industry-type" style="margin-top:15px;">
                  <div class="filter-title">行业类型：</div>
                  <ul @click="Filter">
                    <li v-for="(item,index) in industryList" :data-value="item" :data-index="index" :data-flage="1" :class="industryClickIndex==index ? 'active' : '' ">{{item}}</li>
                  </ul>
              </div>
              <div class="finance-stage" style="margin-top:15px;">
                <div class="filter-title">融资阶段：</div>
                <ul @click="Filter">
                  <li v-for="(item,index) in financeList" :data-value="item" :data-index="index" :data-flage="2" :class="financeClickIndex==index ? 'active' : '' ">{{item}}</li>
                </ul>
              </div>
              <div class="finance-stage" style="margin-top:15px;">
                <div class="filter-title">公司规模：</div>
                <ul @click="Filter">
                  <li v-for="(item,index) in  scaleList" :data-value="item" :data-index="index" :data-flage="3" :class="scaleClickIndex==index  ? 'active' : '' ">{{item}}</li>
                </ul>
              </div>
          </div>
         <!--下方列表展示区-->
         <div class="company-square-part">
           <div class="company-square-item" v-for="temp in  squareData" @click="goCompanyDetails">
              <div class="company-square-item-top">
                 <div class="csit-img">
                   <img src="https://img.bosszhipin.com/beijin/images/imageafdcfd42b5573f405694b10542b2ed0a-1b8ad4f9ae798dceAsHDAnQIDhIOlQ~~?x-oss-process=image/resize,w_120,limit_0"/>
                 </div>
                 <div class="csit-main">
                    <div >光际科技</div>
                    <div>
                      <span>不需要融资</span>
                      <span>智能硬件</span>
                    </div>
                 </div>
              </div>
              <div class="company-square-item-bottom">
                  <span>热招：</span>
                  <span>Web系统架构师</span>
                  <span>15K-30K</span>
              </div>
           </div>
         </div>
         <div class="pagination-party">
           <div class="block">
             <el-pagination
               @size-change="handleSizeChange"
               @current-change="handleCurrentChange"
               :current-page.sync="currentPage1"
               :page-size="100"
               layout="total, prev, pager, next"
               :total="1000">
             </el-pagination>
           </div>
         </div>
       </div>
   </div>
   <!--底部-->
   <footer-nav></footer-nav>
</div>


</template>

<script>
    import footerNav from "../components/footerNav"
    export default {
        name: "company",
      data()
      {
        return{
          params:{},
          addressClickIndex:0,
          industryClickIndex:0,
          financeClickIndex:0,
          scaleClickIndex:0,
          addressList:['全国','上海','北京','广州','深圳','杭州','天津','西安','武汉','厦门','长沙','郑州','苏州','成都','重庆','其他城市'],
          industryList:['不限','电子商务','游戏','媒体','互联网','计算机软件','医疗健康','旅游','金融','市场销售','贸易','020','在线教育','企业服务','信息安全','工程','汽车生产','其他行业'],
          financeList:['不限','未融资','天使轮','A轮','B轮','C轮','D轮','已上市','不需要融资'],
          scaleList:['不限','0-20人','20-99人','100-499人','500-999人','10000人以上'],
          squareData:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],
          currentPage1:1
        }
      },
      methods:
        {
          Filter(event)
          {
             let {flage,value,index}=event.target.dataset;
             if(!event.target.nodeName.toLowerCase()=="li")
             {
               return;
             }
             switch (flage)
             {
               case "0" :
                 this.filterItemClick("address",value,index,"addressClickIndex");
                 break;
               case "1" :
                 this.filterItemClick("industry",value,index,"industryClickIndex");
                 break;
               case "2" :
                 this.filterItemClick("finance",value,index,"financeClickIndex");
                 break;
               case "3" :
                 this.filterItemClick("scale",value,index,"scaleClickIndex");
             }
          },
          filterItemClick(name,value,index,clickElementIndex)
          {
            this[clickElementIndex]=index;
            this.params[name]=value;
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          },
          goCompanyDetails()
          {
            this.$router.push("/companyDetails");
          }
        },
      components:
        {
          footerNav
        }
    }
</script>

<style scoped lang="scss">
  .company-party-container
  {
    margin-bottom: 30px;
    .company-main-wrapper
    {
      width:1000px;
      margin:0 auto;
      //综合筛选区
      .filter-part
      {
        padding:25px 20px;
        background-color: #fff;
        .filter-address,.industry-type,.finance-stage
        {
          display: flex;
          //border:1px solid #aaa;
          .filter-title
          {
            font-size: 14px;
            color:#414A60;
          }
          ul{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            flex:1;
            //border: 1px solid #000;
            font-size: 14px ;
            color:#61687C;
            li{
                display: flex;
                justify-content: center;
                align-items: center;
                padding:1px 10px 0;
                margin:0 10px 8px 0;
                // border:1px solid #aaa
                &.active
                {
                  color:#00C2B3;
                }
                &:hover
                {
                  color:#00C2B3
                }
            }
          }
        }
      }
      //网格展示区
      .company-square-part
      {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        margin-top:20px;
        padding: 30px 0;
        background-color: #fff;
        .company-square-item
        {
          width: 25%;
          box-sizing: border-box;
          border:1px solid #eee;
          .company-square-item-top
          {
            display: flex;
            padding:20px 0;
            margin:0 21px;
            justify-content: space-between;
            border-bottom:1px dashed #E0E0E0;
            .csit-img
            {
              width: 30%;
              img{
                width:57px;
                height:57px;
                border-radius:8px;
              }
            }
            .csit-main
            {
              flex:1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              text-align: right;
              div:nth-of-type(1)
              {
                font-size: 16px;
                color:#414A60;
              }
              div:nth-of-type(2)
              {
                font-size: 12px;
                color:#898E9D;
                span{
                  padding:0 10px;
                }
                span:nth-of-type(1)
                {
                  border-right:1px solid #E0E0E0;
                }
              }
            }
            &:hover .csit-main div:nth-of-type(1)
            {
              color:#00C2B3;
            }
          }
          .company-square-item-bottom
          {
             box-sizing: border-box;
             padding:10px 21.5px;
             font-size: 12px;
             color:#8D92A1;
             text-align: left;
            span:nth-of-type(2)
            {
              color:#00C2B3;
            }
            &:hover
            {
              background-color: #FAFAFA;
            }

          }
          &:hover
          {
            box-shadow: 3px 3px 8px 3px #eee;
            z-index:999;
          }
        }

      }
      .pagination-party
      {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1000px;
        height: 100px;
        background-color: #fff;
        margin:0 auto;
        text-align: center;
      }
      /deep/
      .el-pager li:hover
      {
        color:#00C2B3;
      }
      /deep/
      .el-pager li.active
      {
        color:#00C2B3;
      }
    }
  }

</style>
