<template>
    <div class="position-wrapper">
        <div class="filter-part">
          <!--城市筛选区-->
          <div class="address-filter">
            <div class="hot-city-title">热门城市：</div>
            <ul @click="changeAddress">
              <li v-for="(item,index) in cityArray" :class="item.selected ? 'selected' : ''" :data-index="index" >{{item.name}}</li>
            </ul>
          </div>
          <!--下拉选择区-->
          <div class="dropSelected-part">
            <div class="drop-title">筛选条件：</div>
            <div class="drop-item">
                <div class="drop-item-input">
                  <input type="text"  readonly="readonly" v-model="experience"/>
                  <div class="selected-list">
                    <ul @click="handlerFilter">
                      <li v-for="(item,index) in experienceFilterData" :data-value="item.value" :data-name="item.name" :data-flage="0" :data-index="index">{{item.name}}</li>
                    </ul>
                  </div>
                  <span class="triangle"></span>
                </div>
            </div>
            <div class="drop-item">
              <div class="drop-item-input">
                <input type="text"  readonly="readonly" v-model="education"/>
                <div class="selected-list">
                  <ul  @click="handlerFilter">
                    <li v-for="(item,index) in educationFilterData" :data-value="item.value" :data-name="item.name" :data-flage="1" :data-index="index">{{item.name}}</li>
                  </ul>
                </div>
                <span class="triangle"></span>
              </div>
            </div>
            <div class="drop-item">
              <div class="drop-item-input">
                <input type="text"  readonly="readonly" v-model="salary"/>
                <div class="selected-list">
                  <ul  @click="handlerFilter">
                    <li v-for="(item,index) in salaryFilterData" :data-value="item.value" :data-name="item.name" :data-flage="2" :data-index="index">{{item.name}}</li>
                  </ul>
                </div>
                <span class="triangle"></span>
              </div>
            </div>
            <div class="drop-item">
              <div class="drop-item-input">
                <input type="text"  readonly="readonly" v-model="company"/>
                <div class="selected-list">
                  <ul  @click="handlerFilter">
                    <li v-for="(item,index) in companyScaleData" :data-value="item.value" :data-name="item.name" :data-flage="3" :data-index="index">{{item.name}}</li>
                  </ul>
                </div>
                <span class="triangle"></span>
              </div>
            </div>
          </div>
        </div>
        <!--筛选的列表显示区-->
        <div class="filter-list-part">
           <div class="filter-list-item" v-for="item in listData " @click="handerGODetails">
              <div class="filter-item-left">
                 <div class="fil-top">
                   <span>web前端开发</span>
                   <span>8K-12K*14薪</span>
                 </div>
                 <div class="fil-bottom">
                   <span>北京市 海定区 中关村</span>
                   <span>1-3年</span>
                   <span>大专</span>
                 </div>
              </div>
              <div class="filter-item-middle">
                 <div class="fim-top">
                   <span>蜂鸟创新</span>
                 </div>
                 <div class="fim-bottom">
                   <span>智能硬件</span>
                   <span>未融资</span>
                   <span>20-99</span>
                 </div>
              </div>
              <div class="filter-item-right">
                 <div class="fir-wrapper">
                     <div class="fir-wrapper-top">
                       <img src="https://img2.bosszhipin.com/boss/avatar/avatar_1.png?x-oss-process=image/resize,w_60,limit_0">
                       <span>郭跃</span>
                       <span>人事</span>
                     </div>
                     <div class="fir-wrapper-bottom">
                        <span>发布于04月09日</span>
                     </div>
                 </div>
                 <div class="communicate">
                     <button>立即沟通</button>
                 </div>
              </div>
           </div>
        </div>
        <!--分页区-->
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
</template>

<script>
    export default {
        name: "position",
        data(){
          return{
            cityArray:[
              {name:'全国',selected:true},
              {name:'北京',selected:false},
              {name:'上海',selected:false},
              {name:'广州',selected:false},
              {name:'深圳',selected:false},
              {name:'杭州',selected:false},
              {name:'天津',selected:false},
              {name:'西安',selected:false},
              {name:'苏州',selected:false},
              {name:'武汉',selected:false},
              {name:'厦门',selected:false},
              {name:'长沙',selected:false},
              {name:'成都',selected:false},
            ],
            experience:"工作经验",
            experienceFilterData:[
                {name:"不限" ,value:""},
                {name:"应届生" ,value:""} ,
                {name:"一年以内" ,value:""},
                {name:"1-3年" ,value:""} ,
                {name:"3-5年" ,value:""},
                {name:"5-10年" ,value:""} ,
                {name:"10年以上" ,value:""}
            ],
            education:"学历要求",
            educationFilterData:[
              {name:"不限",value:""},
              {name:"大专/中专",value:""},
              {name:"本科",value:""},
              {name:"硕士",value:""},
              {name:"博士",value:""}
             ],
            salary:"薪资要求",
            salaryFilterData:[
              {name:"不限",value:""},
              {name:"5-10K",value:""},
              {name:"10-15K",value:""},
              {name:"15K-20K",value:""},
              {name:"20K以上",value:""}
            ],
            company:"公司规模",
            companyScaleData:[
              {name:"不限",value:""},
              {name:"0-20人",value:""},
              {name:"20-99人",value:""},
              {name:"100-499人",value:""}
            ],
            listData:[0,1,2,3,4,5,6,7,8,9],
            currentPage1:1
          }

        },
        methods:{
          changeAddress(event)
          {
            if(event.target.nodeName.toLowerCase()=='li')
            {
               let index=event.target.dataset.index;
               this.cityArray.forEach((item)=>{
                  item.selected=false;
               });
              this.cityArray[index].selected=true;

            }
          },
          handlerFilter(event)
          {
            console.log("event",event);
            if(event.target.nodeName.toLowerCase()=="li")
            {
              let {index,name,value,flage}=event.target.dataset;
              switch (flage)
             {
               case "0":
                 this.filterVmodel("experience",name,value,index,"工作经验");
                 break;
                case "1":
                  this.filterVmodel("education",name,value,index,"学历要求");
                  break;
                case "2":
                  this.filterVmodel("salary",name,value,index,"薪资要求");
                  break;
                case "3":
                  this.filterVmodel("company",name,value,index,"公司规模");
                  break;
             }

            }
          },
          filterVmodel(param,name,value,index,initValue)
          {
            if(index==0)
            {
              this[param]=initValue;
            }else {
              this[param]=name;
            }
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          },
          handerGODetails()
          {
            this.$router. push("/positionDetail")
          }
        }
    }
</script>

<style scoped lang="scss">
  .position-wrapper
  {
    margin-bottom: 25px;
    //筛选区
    .filter-part
    {
      height: 100px;
      background: #fff;
      box-sizing: border-box;
      border:1px solid #eee;
      //地点选择区
      .address-filter
      {
        display: flex;
        width:1200px;
        margin:0 auto;
        padding-top:10px;
        font-size: 14px;
        color:#414A60;
        padding-bottom:10px;
        border-bottom:1px solid #eee;
        ul{
          display: flex;
          flex: 1;
          li{
            width: calc(100%/13);
            box-sizing: border-box;
            text-align: center;
            &.selected{
              color:#5DD5C8;
            }
          }
        }
      }
      //下拉选择区
      .dropSelected-part
      {
        display: flex;
        width: 1200px;
        height: 48px;
        margin:0px  auto 0;
        align-items: center;
        .drop-title
        {
          font-size: 14px;
          color:#414A60;
        }
        .drop-item
        {
          position: relative;
          width: 150px;
          margin-right: 30px;
          .drop-item-input
          {
            position: relative;
            display: flex;
            font-size: 16px;
            input{
              width: 150px;
              height: 30px;
              text-align: center;
              outline: none;
              border: none;
            }
            span{
              position: absolute;
              top:13px;
              right:4px;
              width: 0;
              height: 0;
              border: 5px solid transparent;
              border-top:5px solid #aaa;
            }
            &:hover div.selected-list
            {
              display: block;
            }
          }
          .selected-list
          {
            position: absolute;
            top:30px;
            left:0;
            width: 150px;
            display: none;
            ul
            {
              border: 1px solid #eee;
              li{
                height:35px;
                text-indent: 1em;
                line-height: 35px;
                font-size: 14px;
                color:#9FA3B0;
                background: #fff;
              }
              li:hover
              {
                background: #eee;
              }
            }
          }
        }
      }
    }
    //下方列表区
    .filter-list-part
    {
       width:1200px;
       margin: 20px auto 0;
       background: #fff;
       .filter-list-item
       {
         display: flex;
         align-items: center;
         box-sizing: border-box;
         border-bottom:1px #f2f2f5 solid;
         padding:20px 40px;
         justify-content:space-between;
         .filter-item-left
         {
            .fil-top
            {
              span:nth-of-type(1)
              {
                padding-right:8px;
                color:#00C2B3;
              }
              span:nth-of-type(2)
              {
                font-size: 16px;
                color:#FC703E;
              }
            }
           .fil-bottom
           {
             margin-top:8px;
             color:#9FA3B0;
             font-size: 0;
             span{
               font-size: 12px;
               padding:0 6px;
             }
             span:nth-of-type(1)
             {
               border-right:1px solid  #eee;
               padding-left:0px;
             }
             span:nth-of-type(2)
             {
               border-right: 1px solid  #eee;
             }
           }
         }
         .filter-item-middle
         {
           .fim-top
           {
             font-size: 16px;
             color:#414A60;
             &:hover span
             {
               color:#00C2B3;
             }
           }
           .fim-bottom
           {
             margin-top:8px;
             color:#9FA3B0;
             font-size: 0;
             span{
               font-size: 12px;
               padding:0 6px;
             }
             span:nth-of-type(1)
             {
               border-right:1px solid  #eee;
               padding-left:0px;
             }
             span:nth-of-type(2)
             {
               border-right: 1px solid  #eee;
             }
           }
         }
         .filter-item-right
         {
           .fir-wrapper
           {
             .fir-wrapper-top
             {
               img{
                 width:30px;
                 height:30px;
                 border-radius: 50%;
                 vertical-align: middle;
                 background-color:#409eff;
               }
               span{
                 font-size: 14px;
                 color:#4A4160;
               }
             }
             .fir-wrapper-bottom
             {
               text-align: right;
               margin-top: 4px;
               font-size: 12px;
               color:#9FA3B0;
             }
           }
           .communicate
           {
             display: none;
             button{
               outline: none;
               border: none;
               width:100px;
               height: 50px;
               border-radius: 3px;
               font-size: 16px;
               text-align: center;
               line-height: 50px;
               color:#fff;
               background-color:#00C2B3;
             }
           }
         }
         &:hover
         {
           background: #fafafa;
           .filter-item-right
           {
             .fir-wrapper
             {
               display: none;
             }
             .communicate
             {
               display: block;
             }
           }
         }
         &:nth-last-child
         {
           border: none;
         }
       }
    }
    .pagination-party
    {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1200px;
      height: 150px;
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
</style>
