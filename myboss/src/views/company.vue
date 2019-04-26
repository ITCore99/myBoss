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
                    <li v-for="(item,index) in industryList" :data-value="item.value" :data-index="index" :data-flage="1" :class="industryClickIndex==index ? 'active' : '' ">{{item.name}}</li>
                  </ul>
              </div>
              <div class="finance-stage" style="margin-top:15px;">
                <div class="filter-title">融资阶段：</div>
                <ul @click="Filter">
                  <li v-for="(item,index) in financeList" :data-value="item.value" :data-index="index" :data-flage="2" :class="financeClickIndex==index ? 'active' : '' ">{{item.name}}</li>
                </ul>
              </div>
              <div class="finance-stage" style="margin-top:15px;">
                <div class="filter-title">公司规模：</div>
                <ul @click="Filter">
                  <li v-for="(item,index) in  scaleList" :data-value="item.value" :data-index="index" :data-flage="3" :class="scaleClickIndex==index  ? 'active' : '' ">{{item.name}}</li>
                </ul>
              </div>
          </div>
         <!--下方列表展示区-->
         <div class="company-square-part"  v-show="!noDataFlage">
           <div class="company-square-item" v-for="temp in  companyData" :data-id="temp._id" @click="goCompanyDetails">
              <div class="company-square-item-top">
                 <div class="csit-img">
                   <img src="https://img.bosszhipin.com/beijin/images/imageafdcfd42b5573f405694b10542b2ed0a-1b8ad4f9ae798dceAsHDAnQIDhIOlQ~~?x-oss-process=image/resize,w_120,limit_0"/>
                 </div>
                 <div class="csit-main">
                    <div>{{temp.name}}</div>
                    <div>
                      <span>{{temp.handlerFancing}}</span>
                      <span>{{temp.industry.name}}</span>
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
         <div class="no-data" v-show="noDataFlage">
           没有检索到你要的数据，修改检索条件试一下
         </div>
         <div class="pagination-party" v-show="!noDataFlage">
           <div class="block">
             <el-pagination
               @size-change="handleSizeChange"
               @current-change="handleCurrentChange"
               :current-page.sync="currentPage1"
               :page-size="12"
               layout="total, prev, pager, next"
               :total="totalCount">
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
          params:{
            city:"",
            industry:"",
            financing:"",
            scale:"",
          },
          addressClickIndex:0,
          industryClickIndex:0,
          financeClickIndex:0,
          scaleClickIndex:0,
          addressList:['全国','上海','北京','广州','深圳','杭州','天津','西安','武汉','厦门','长沙','郑州','苏州','成都','重庆','其他城市'],
          industryList:[{name:"不限",value:""},{name:"电子商务",value:"5cbad17e33521a448401cfb9"},{name:"游戏",value:"5cbad18733521a448401cfba"},{name:"媒体",value:"5cbad19333521a448401cfbb"},{name:"互联网",value:"5cbad19f33521a448401cfbc"},{name:"计算机软件",value:"5cbad1ab33521a448401cfbd"},
            {name:"医疗健康",value:"5cbad1b633521a448401cfbe"},{name:"旅游",value:"5cbad1bf33521a448401cfbf"},{name:"金融",value:"5cbad1c633521a448401cfc0"},{name:"市场销售",value:"5cbad1d933521a448401cfc1"},{name:"贸易",value:"5cbad1e533521a448401cfc2"},{name:"o2o",value:"5cbad1f333521a448401cfc3"},
            {name:"在线教育",value:"5cbad20033521a448401cfc4"},{name:"企业服务",value:"5cbad20b33521a448401cfc5"},{name:"信息安全",value:"5cbad21733521a448401cfc6"},{name:"工程",value:"5cbad21f33521a448401cfc7"},{name:"汽车生产",value:"5cbad26333521a448401cfc8"},{name:"其他行业",value:"5cbad27233521a448401cfc9"}],
          scaleList:[{name:"不限",value:""},{name:"0-20人",value:"0"},{name:"20-99人",value:"1"},{name:"100-499人",value:"2"},{name:"500-999人",value:"3"},{name:"10000人以上",value:"4"}],
          financeList:[{name:"不限",value:""},{name:"未融资",value:"0"},{name:"天使轮",value:"1"},{name:"A轮",value:"2"},{name:"B轮",value:"3"},{name:"C轮",value:"4"},{name:"D轮",value:"5"},{name:"已上市",value:"6"},{name:"不需要融资",value:"7"}],
          currentPage1:1,
          totalCount:0, //总条数
          companyData:[], //公司数据
          noDataFlage:false,

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
                 this.filterItemClick("city",value,index,"addressClickIndex");
                 break;
               case "1" :
                 this.filterItemClick("industry",value,index,"industryClickIndex");
                 break;
               case "2" :
                 this.filterItemClick("financing",value,index,"financeClickIndex");
                 break;
               case "3" :
                 this.filterItemClick("scale",value,index,"scaleClickIndex");
             }
          },
          filterItemClick(name,value,index,clickElementIndex)
          {
            this[clickElementIndex]=index;
            if(name=="city" && value=="全国")
            {
                this.params[name]="";
            }else{
              this.params[name]=value;
            }
            this.getListCompanyData();
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          },
          goCompanyDetails(event)
          {
            let {id}=event.currentTarget.dataset;
            this.$router.push({path:"/companyDetails",query:{id}});
          },
          getListCompanyData()
          {
            console.log("params",this.params);
            this.$axios.post("company",{params:this.params}).then(res=>{
              console.log("companyData",res);
              if(res.code==200)
              {
                if(res.data.length==0)
                {
                  this.noDataFlage=true
                  return;
                }else{
                  this.noDataFlage=false;
                }
                res.data.forEach(item=>{
                  let handlerFancing="";
                  switch (item.financing)
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
                  item.handlerFancing=handlerFancing;
                })
                this.totalCount=res.count;
                this.companyData=res.data;
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败,请检查网络连接")
            })
          }

        },
      components: {
          footerNav
        },
      created(){
        this.getListCompanyData();
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
        width: 1000px;
        min-height: 400px;
        width: 100%;
        flex-wrap: wrap;
        margin-top:20px;
        padding: 30px 0;
        background-color: #fff;
        .company-square-item
        {
          width: 25%;
          height: 140px;
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
      .no-data{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1000px;
        height: 400px;
        margin:20px auto;
        color:#9FA3B0;
        font-size: 16px;
        background-color: #fff;
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
