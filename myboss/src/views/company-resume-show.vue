<template>
  <div>
    <div class="position-wrapper">
      <div class="filter-part">
        <!--下拉选择区-->
        <div class="dropSelected-part">
          <div class="drop-title">简历筛选：</div>
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
        </div>
      </div>
      <!--筛选的列表显示区-->
      <div class="filter-list-part"  v-show="!noDataFlage">
        <div class="filter-list-item" v-for="item in deliverResumeData ">
          <div class="filter-item-left">
            <div class="fil-top">
              <span>{{item.resume.exceptionPosition}}</span>
              <span>{{item.resume.exceptSalary}}K</span>
            </div>
            <div class="fil-bottom">
              <span>{{item.resume.exceptionPlace}}</span>
              <span>{{item.handlerWorkExperence}}{{item.handlerWorkExperence <= 0 ? '' : ' 年经验'}}</span>
              <span>{{item.resume.education}}</span>
            </div>
          </div>

          <div class="filter-item-right">
            <div class="fir-wrapper">
              <div class="fir-wrapper-top">
                <img src="https://img2.bosszhipin.com/boss/avatar/avatar_15.png">
                <span>{{item.resume.name}}</span>
              </div>
            </div>
            <div class="communicate">
              <button @click="goResumeShow(item.resume._id)">查看简历</button>
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
    name: "company-resume-show",
    data(){
      return{
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
        currentPage1:1,
        params:{         //查询组合
          workExperience:"",
          education:"",
          salary:"",
        },
        noDataFlage:false,
        totalCount:0,
        deliverResumeData:[]  //投递的简历信息
      }

    },
    methods:{
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
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getDeliverResume()
      {
        this.$axios.get("deliver/company",{email:"it_fzn19970317@163.com"}).then(res=>{
          console.log("deliverResume",res);
          if(res.code==200)
          {
            if(res.data.length>0)
            {
              res.data.forEach(item=>{

                let startDate=new Date(item.resume.startDate);
                let workYear=new Date().getFullYear()-startDate.getFullYear()
                workYear = workYear <= 0 ? '应届生' : workYear ;
                item.handlerWorkExperence=workYear;

              })
              this.deliverResumeData=res.data;
            }else{

            }

          }else{

            this.$message.info(res.msg);
          }
        }).catch(err=>{
          console.log(err);
          this.$message.error("获取数据错误,请检查你的网络连接！")
        })
      },
      goResumeShow(id)
      {
        this.$router.push({path:"/look/resume",query:{id}});
      }
    },
    components:{
      footerNav,
    },
    created(){
      this.getDeliverResume();
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
      background: #fff;
      box-sizing: border-box;
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
              height: 45px;
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
