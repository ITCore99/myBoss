<template>
  <div>
    <div class="position-wrapper">
        <div class="filter-part">
          <!--城市筛选区-->
          <div class="address-filter">
            <div class="hot-city-title">热门城市：</div>
            <ul @click="changeAddress">
              <li v-for="(item,index) in cityArray" :class="item.selected ? 'selected' : ''" :data-index="index" :data-name="item.name">{{item.name}}</li>
            </ul>
          </div>
          <!--下拉选择区-->
          <div class="dropSelected-part">
            <div class="drop-title">筛选条件：</div>
            <div class="drop-item">
                <div class="drop-item-input">
                  <input type="text"  readonly="readonly" v-model="workExperience"/>
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
                <input type="text"  readonly="readonly" v-model="scale"/>
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
        <div class="filter-list-part"  v-show="!noDataFlage">
           <div class="filter-list-item" v-for="item in positionData " @click="handerGODetails($event)" :data-id="item._id">
              <div class="filter-item-left">
                 <div class="fil-top">
                   <span>{{item.name}}</span>
                   <span>{{item.salary}}K</span>
                 </div>
                 <div class="fil-bottom">
                   <span>{{item.address}}</span>
                   <span>{{item.workExperience}}年</span>
                   <span>{{item.handerEduction}}</span>
                 </div>
              </div>
              <div class="filter-item-middle">
                 <div class="fim-top">
                   <span>{{item.company.name}}</span>
                 </div>
                 <div class="fim-bottom">
                   <span>{{item.industry.name}}</span>
                   <span>{{item.handlerFancing}}</span>
                   <span>{{item.handlerScale}}</span>
                 </div>
              </div>
              <div class="filter-item-right">
                 <div class="fir-wrapper">
                     <div class="fir-wrapper-top">
                       <img src="https://img2.bosszhipin.com/boss/avatar/avatar_1.png?x-oss-process=image/resize,w_60,limit_0">
                       <span>{{item.recruiter}}</span>
                       <span>{{item.recruiterPosition}}</span>
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
        <div class="no-data" v-show="noDataFlage">
          没有检索到你要的数据，修改检索条件试一下
        </div>
        <!--分页区-->
        <div class="pagination-party" v-show="!noDataFlage">
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="totalCount">
            </el-pagination>
          </div>
        </div>
    </div>
    <!---footer-->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
    import footerNav from "../components/footerNav"
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
            workExperience:"工作经验",
            experienceFilterData:[
                {name:"不限" ,value:""},
                {name:"应届生" ,value:"0"} ,
                {name:"1-3年" ,value:"1"} ,
                {name:"3-5年" ,value:"2"},
                {name:"5-10年" ,value:"3"} ,
                {name:"10年以上" ,value:"4"}
            ],
            education:"学历要求",
            educationFilterData:[
              {name:"不限",value:""},
              {name:"大专/中专",value:"0"},
              {name:"本科",value:"1"},
              {name:"硕士",value:"2"},
              {name:"博士",value:"3"},
              {name:"博士以上",value:"4"}
             ],
            salary:"薪资要求",
            salaryFilterData:[
              {name:"不限",value:""},
              {name:"5-10K",value:"5-10"},
              {name:"10-20K",value:"10-20"},
              {name:"10-30K",value:"10-30"},
              {name:"15K-35K",value:"15-35"},
              {name:"35K以上",value:"35-9999"}
            ],
            scale:"公司规模",
            companyScaleData:[
              {name:"不限",value:""},
              {name:"0-20人",value:"0"},
              {name:"20-99人",value:"1"},
              {name:"100-499人",value:"2"},
              {name:"500-999人",value:"3"},
              {name:"10000人以上",value:"4"}
            ],
            positionData:[],    //存放筛选的数据
            currentPage1:1,
            params:{         //查询组合
              name:"",
              workExperience:"",
              education:"",
              salary:"",
              scale:"",
              city:"",
              positionClassify:"",
            },
            queryString:"" ,//查询参数
            noDataFlage:false,
            totalCount:0,
          }

        },
        methods:{
          changeAddress(event)
          {
            if(event.target.nodeName.toLowerCase()=='li')
            {
               let {index,name}=event.target.dataset;
               this.cityArray.forEach((item)=>{
                  item.selected=false;
               });
              this.cityArray[index].selected=true;
              if(index==0)
              {
                this.params.city="";
              }else
              {
                this.params.city=name;
              }
              this.queryPositionInfo();
            }
          },
          handlerFilter(event)
          {
            if(event.target.nodeName.toLowerCase()=="li")
            {
              let {index,name,value,flage}=event.target.dataset;
              switch (flage)
             {
               case "0":
                 this.filterVmodel("workExperience",name,value,index,"工作经验");
                 break;
                case "1":
                  this.filterVmodel("education",name,value,index,"学历要求");
                  break;
                case "2":
                  this.filterVmodel("salary",name,value,index,"薪资要求");
                  break;
                case "3":
                  this.filterVmodel("scale",name,value,index,"公司规模");
                  break;
             }

            }
          },
          filterVmodel(param,name,value,index,initValue)
          {
            if(index==0)
            {
              this[param]=initValue;
              this.params[param]="";

            }else {
              this[param]=name;
              this.params[param]=value;
            }
            this.queryPositionInfo();
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          },
          handerGODetails(event)
          {
            let id=event.currentTarget.dataset.id;//注意这里
            this.$router.push({path:"/positionDetail",query:{
              id
              }});
          },
          /***
           * 筛选函数
           */
          queryPositionInfo()
          {
            this.$axios.post("position/search",{params:this.params}).then(res=>{
              if(res.code==200)
              {
                 console.log("sss",res);
                 if(res.data.length!=0)
                 {
                   res.data.forEach(item=>{
                     let handerEduction="";
                     let workExperience="";
                     let handlerFancing="";
                     let handlerScale="";
                     switch (item.workExperience)
                     {
                       case "0" :
                         workExperience="应届生";
                         break;
                       case "1" :
                         workExperience="1-3";
                         break;
                       case "2" :
                         workExperience="3-5";
                         break;
                       case "3" :
                         workExperience="5-10";
                         break;
                       case "4" :
                         workExperience="10+";
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
                     switch (item.company.financing)
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
                     switch (item.company.scale)
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
                     item.handerEduction=handerEduction;
                     item.workExperience=workExperience;
                     item.handlerFancing=handlerFancing;
                     item.handlerScale=handlerScale;
                   });
                   this.noDataFlage=false;
                 }else{
                   this.noDataFlage=true;
                 }
                 this.totalCount=res.count;
                 this.positionData=res.data;

              }
            }).catch(err=>{
                console.log(err);
                this.$message.error("查询失败,请重试")
            })
          }
        },
        components:{
          footerNav,
        },
        created(){
          this.params.name=this.$route.query.queryString;
          this.params.positionClassify=this.$route.query.id;
          this.queryPositionInfo();
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
        width:1000px;
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
        width: 1000px;
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
       width:1000px;
       min-height: 500px;
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
            width: calc(100% / 3);
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
           width: calc(100% / 3);
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
           width: calc(100% / 3);
           display: flex;
           justify-content: flex-end;
           align-self: flex-end;
           align-items: center;
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
               width:135px;
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
    .no-data
    {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1000px;
      height: 500px;
      margin:20px  auto 0;
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
