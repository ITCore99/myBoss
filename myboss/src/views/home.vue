<template>
  <div>
     <div class="home-container">
        <div class="wrapper">
          <!--顶部查询区-->
          <div class="input-wrapper">
            <div style="height: 100%;width:80%;border:1px solid #eee;box-sizing: border-box;display: flex">
              <span>职位类型</span>
              <input type=" text"  placeholder="搜素职位" v-model="queryString"/>
            </div>
            <button @click="handlerSearch">搜素</button>
          </div>
          <!--热门职业区-->
          <div class="hot-job">
             <span class="hot-title">热门职位</span>
             <ul>
               <li>C++</li>
               <li>java</li>
               <li>javaScript</li>
               <li>python</li>
             </ul>
          </div>
          <!--主筛选区-->
          <div class="main-choice">
             <div class="main-choice-slider">
                <ul class="sliderUl">
                  <li v-for="(item) in collegeData"  :data-id="item._id"  @mouseenter="getTypeClassify">
                    <span style="text-align:center;width: 100%;font-size: 16px; font-weight: normal">{{item.name}}</span>
                    <!--<router-link to=""></router-link>-->
                    <!--<router-link to=""></router-link>-->
                    <!--<router-link to=""></router-link>-->
                    <router-link to="">&gt</router-link>
                    <div class="slider-details">
                          <div class="slider-details-title">{{item.name}}</div>
                          <div class="slider-details-main" v-for="(temp) in typeClassify">
                            <div class="slider-details-classify">
                              {{temp.positionType}}
                            </div>
                            <div class="slider-details-job">
                              <ul @click="handlerPositionClassify">
                                <li v-for="(ele) in temp.positionClassify" :data-id="ele._id">{{ele.name}}</li>
                              </ul>
                            </div>
                          </div>

                    </div>
                  </li>
                </ul>
             </div>
             <div class="main-choice-middle"></div>
             <div class="main-choice-sudoku">
                <div class="sudoku-one">
                    <router-link to="">
                      <img src="https://img.bosszhipin.com/beijin/upload/image/20190401/7dc08dc4eb802797d43b80d0e0466c49.jpg?x-oss-process=image/format,jpg" />
                    </router-link>
                    <router-link to="">
                      <img src="https://img.bosszhipin.com/beijin/upload/image/20190404/4148bae957167db2074a40fccc722d6a.jpg?x-oss-process=image/format,jpg" />
                    </router-link>
                </div>
                <div class="sudoku-two">
                   <router-link to="">
                     <img src="https://img.bosszhipin.com/beijin/upload/image/20190404/136641c71f07e89986d5f634e4e5d62f.jpg?x-oss-process=image/format,jpg"/>
                   </router-link>
                   <router-link to="">
                     <img src="https://img.bosszhipin.com/beijin/upload/image/20180806/deb507393d7098bc1834f843f64cf587.jpg?x-oss-process=image/format,jpg"/>
                   </router-link>
                   <div class="heap">
                     <router-link to="">
                       <img src="https://img.bosszhipin.com/beijin/upload/image/20190404/0f53e2995fb2e04d6d0b3614fdd13395.jpg?x-oss-process=image/format,jpg"/>
                     </router-link>
                     <router-link to="">
                       <img src="https://img.bosszhipin.com/beijin/upload/image/20190404/6abe0d3fc8e218431bb121b5dadccd5d.png?x-oss-process=image/format,jpg"/>
                     </router-link>
                   </div>
                </div>
                <div class="sudo-three">
                   <router-link to="">
                     <img src="https://img.bosszhipin.com/beijin/upload/image/20190404/4e369739b5f32fa62577e54c7eaf5fab.jpg?x-oss-process=image/format,jpg"/>
                   </router-link>
                   <router-link to="">
                     <img src="https://img.bosszhipin.com/beijin/upload/image/20190404/72583996501d4cf1bc0e568054a26200.jpg?x-oss-process=image/format,jpg"/>
                   </router-link>
                </div>
             </div>
             <div class="main-choice-classify">

             </div>
          </div>
          <!--热门专业-->
          <div class="hot-domain-party">
            <ul @click="changLastPosition">
              <li v-for="(item,index) in collegeData" :data-id="item._id" :data-index="index" :class=" CollegeIndex==index ? 'active' : '' ">{{item.name}}</li>
            </ul>
            <div class="square-part">
               <router-link to="" @click.native="goPositionDetails(item._id,'1')" v-for="(item,index) in lastPositions" v-bind:key="index">
                  <div class="square-top">
                     <div class="square-job-wrapper">
                       <div class="square-job-title">{{item.name}}</div>
                       <div class="square-salary">{{item.salary}}K</div>
                     </div>
                     <div class="square-job-bottom">
                        <span>{{item.city}}</span>
                        <span>{{item.workExperience}}年</span>
                        <span>{{item.handerEduction}}</span>
                     </div>
                  </div>
                  <div class="square-bottom">
                       <img  src="https://img.bosszhipin.com/beijin/mcs/useravatar/20190408/82d6a8ecd579b9f24b7656c97356e2bfcfcd208495d565ef66e7dff9f98764da_s.jpg"/>
                       <span>{{item.company.name}}</span>
                       <span>{{item.company.recruiter}}</span>
                       <span>{{item.company.recruiterPosition}}</span>
                  </div>
               </router-link>
               <div class="no-data" v-if="CollegeFlage">
                  暂无数据
               </div>
            </div>
            <!--查看更多-->
            <div class="getMore" v-if="!CollegeFlage">
                <button @click="goMore('1')">查看更多</button>
            </div>
          </div>
          <!--企业巨头区-->
          <div class="company-giant">
            <ul @click="changeLastCompanys">
              <li :data-type="3" :data-index="0" :class="companyIndex==0 ? 'active' : '' ">行业巨头</li>
              <li :data-type="4" :data-index="1" :class="companyIndex==1 ? 'active' : '' ">热门公司</li>
              <li :data-type="2" :data-index="2" :class="companyIndex==2 ? 'active' : '' ">新锐公司</li>
              <li :data-type="1" :data-index="3" :class="companyIndex==3 ? 'active' : '' ">上市公司</li>
            </ul>
            <div class="company-square">
              <router-link to=""  @click.native="goPositionDetails(item._id,'2')"  v-for="(item,index) in lastCompanys">
                <div class="company-square-top">
                   <div class="cst-left">
                      <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20171107/6b08163b16bcfc670480c6610be72906cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_100,limit_0"/>
                   </div>
                   <div class="cst-right">
                       <div class="cstr-top">
                            <span>{{item.name}}</span>
                       </div>
                       <div class="cstr-bottom">
                            <span>{{item.handlerFancing}}</span>
                            <span>{{item.industry.name}}</span>
                       </div>
                   </div>
                </div>
                <div class="company-square-bottom"></div>
              </router-link>
              <div class="no-data" v-if="companyFlage">
                 暂无数据
              </div>
            </div>
          </div>
          <!--查看更多-->
          <div class="getMore" v-if="!companyFlage">
            <button @click="goMore('2')">查看更多</button>
          </div>
        </div>
     </div>
    <!--footer-->
    <footer-nav></footer-nav>
  </div>

</template>

<script>
    import footerNav from  "../components/footerNav"
    export default {
        name: "home",
        data:()=>{
          return{
            collegeData:[],
            queryString:"",
            typeClassify:[],
            lastPositions:[],
            CollegeIndex:0,   //最新职位
            CollegeFlage:false,//最新职位控制
            lastCompanys:[],
            companyIndex:0,
            companyFlage:false,
          }
        },
        methods:{
          getCollegeData:function()
          {
            this.$axios.get("/college").then(res=>{
              if(res.code==200)
              {
                 this.collegeData=res.data;

              }else{

                 this.$message.error("获取数据失败，请检查网络")
              }
            })
          },
          getTypeClassify(event)
          {
            let id=event.target.dataset.id;
            this.$axios.get(`posType/${id}`).then(res=>{
              if(res.code==200)
              {
                this.typeClassify=res.data;

              }else{
                this.$message.error("获取数据失败，请检查网络")
              }
            })
          },
          getCollegeLastData(collegeId)
          {

            this.$axios.get(`position/last/${collegeId}`).then(res=>{
              if(res.code==200)
              {

                if(res.data.length!=0)
                {
                  res.data.forEach(item=>{
                    let handerEduction="";
                    let workExperience="";
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
                    item.handerEduction=handerEduction;
                    item.workExperience=workExperience;
                  });
                  this.CollegeFlage=false;
                  this.lastPositions=res.data;
                }else
                {
                  this.CollegeFlage=true;
                  this.lastPositions=res.data;
                }
              }

            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败，请检查网络")
            })
          },
          changLastPosition(event)
          {
            if(event.target.nodeName.toLowerCase()=="li")
            {
              let {id,index}=event.target.dataset;
              this.CollegeIndex=index;
              this.getCollegeLastData(id);
            }
          },
          getCompany(type)
          {
            this.$axios.post("company/type",{type}).then(res=>{
              if(res.code==200)
              {
                  if(res.data.length==0)
                  {
                    this.companyFlage=true;
                    this.lastCompanys=res.data;
                    return;
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
                  });
                  this.companyFlage=false;
                  this.lastCompanys=res.data;
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败,请检查网络")
            })
          },
          changeLastCompanys(event)
          {
            if(event.target.nodeName.toLowerCase()=="li")
            {

              let {type,index} = event.target.dataset;
              this.companyIndex=index;
              this.getCompany(type);
            }
          },
          goMore(flage)
          {
            if(flage=="1")
            {
              this.$router.push("/position");
              this.$store.commit("CHANGETITLE",1);
            }else if(flage=="2")
            {
              this.$router.push("/company");
              this.$store.commit("CHANGETITLE",2);
            }
          },
          goPositionDetails(id,flage)
          {
            alert(id);
            if(flage=="1")
            {
              this.$router.push({name:"positionDetail",params:{id}});

            }else if(flage=="2")
            {
              this.$router.push({name:"companyDetail",params:{id}});
            }

          },
          handlerSearch()
          {
            let params=this.queryString;
            if(params)
            {
              this.$router.push({path:"/position",query:{queryString:params}});
              this.$store.commit("CHANGETITLE",1);
            }else{
              this.$message.info("请输入相应关键词")
            }
          },
          handlerPositionClassify(event)
          {
            let {id} = event.target.dataset;
            console.log("positionClassify",id);
            this.$router.push({path:"/position",query:{id}});
          }
        },
        created:function()
        {
          this.getCollegeData();
          this.getCollegeLastData("5cb593f6024fc319a8f3bc83");
          this.getCompany(3);
        },
       components:{
         footerNav
       }

    }
</script>

<style scoped lang="scss">

    .home-container
    {
      width: 1000px;
      margin: 0 auto 0;
      box-sizing: border-box;
      //border: 1px solid #eee;
      .wrapper
      {
        .input-wrapper
        {
          display: flex;
          width: 1000px;
          height: 64px;
          margin: 26px auto 0;
          span {
            display: inline-block;
            line-height: 64px;
            text-align: center;
            color: #61687c;
            opacity: 0.8;
            width: 15%;
            height: 100%;
          }
          input {
            flex: 1;
            height: 100%;
            outline: none;
            border: none;
            vertical-align: 4px;
            font-size: 16px;
            text-indent: 2em;
          }
          button {
            border: none;
            outline: none;
            flex: 1;
            font-size: 16px;
            color: #fff;
            height: 100%;
            background-color: #55cbc4;
            vertical-align: 4px;
            &:hover {
              background-color: #00d7c6;
            }
          }
        }

        //热门招聘
        .hot-job {
          display: flex;
          align-items: center;
          width: 1000px;
          margin: 0 auto;
          .hot-title {
            width: 10%;
            height: 50px;
            line-height: 50px;
            opacity: 0.8;
            margin-left: 15px;
            font-size: 14px;
            color: #61687c;
          }
          ul {
            display: flex;
            width: 88%;
            li {
              width: 10%;
              font-size: 14px;
              color: #55cbc4;
              text-align: center;
            }
          }
        }


        //主筛选区
        .main-choice {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 500px;
          margin-top: 30px;
          border: 1px solid #eee;
          .main-choice-slider
          {
            width: 25%;
            height: 100%;
            background-color: #fff;
            ul
            {
              height: 100%;
              li
              {
                position: relative;
                display: flex;
                align-items: center;
                height: 10%;
                span,a
                {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #61687c;
                  font-size: 14px;
                  width: 20%;
                  height: 100%;
                  text-decoration: none;
                }
                span {
                  font-weight: bold;
                  color: #353535;
                  text-align: center;
                }
                a:last-of-type{
                  color:#ddd;
                }
                .slider-details
                {
                  display: none;
                  position:absolute;
                  box-shadow: 3px 4px 10px #ddd;
                  top:0;
                  left:100%;
                  width:800px;
                  font-size: 14px;
                  color:#61687c;
                  box-sizing: border-box;
                  padding:15px 20px;
                  background: #fff;
                  z-index:999;
                  .slider-details-title
                  {
                    font-size: 16px;
                    font-weight: bold;
                    color:#353535;
                  }
                  .slider-details-main
                  {
                     width: 100%;
                     display: flex;
                     padding:15px 0;
                     .slider-details-classify
                     {
                       display: flex;
                       align-items: center;;
                       //justify-content: center;
                       margin-left:15px;
                       color:#9FA3B0;
                       width: 20%;
                     }
                     .slider-details-job
                     {
                       flex: 1;
                       ul{
                         display: flex;
                         width: 100%;
                         flex-wrap: wrap;
                         li{
                           display: flex;
                           //justify-content: center;
                           align-items: center;
                           color:#61687c;
                           width:calc(100% /5);
                           height: 30px;
                           font-size: 14px;
                           &:hover{
                             background: #fff;
                             color: #55cbc4;
                           }
                         }
                       }
                     }
                  }
                }
                &:hover{
                  background: #55cbc4;
                }
                &:hover span {
                  color: #fff;
                }
                &:hover a {
                  color: #fff;
                }
                &:hover  .slider-details{
                   display: block;
                }
              }

            }
          }
          .main-choice-middle{
            width: 4%;
            height: 100%;
            background: transparent;
          }
          //九宫格
          .main-choice-sudoku {
            flex: 1;
            height: 100%;
            box-sizing: border-box;
            img:hover{
              opacity:0.8;
            }
            .sudoku-one {
              display: flex;
              height: 40%;
              a:nth-of-type(1) {
                width: 70%;
                height: 100%;
                box-sizing: border-box;
                border: 1px solid #eee;
              }
              a:nth-of-type(2) {
                width: 30%;
                height: 100%;
                box-sizing: border-box;
                border: 1px solid #eee;
              }
              img {
                width: 100%;
                height: 100%;
              }
            }
            .sudoku-two {
              display: flex;
              height: 40%;
              img {
                width: 100%;
                height: 100%;
              }
              a {
                width: calc(100% / 3);
                height: 100%;
                box-sizing: border-box;
                border: 1px solid #eee;
              }
              .heap {
                display: flex;
                flex-direction: column;
                width: calc(100% / 3);
                a {
                  width: 100%;
                  height: 50%;
                  box-sizing: border-box;
                  border: 1px solid #eee;
                }
              }
            }
            .sudo-three {
              display: flex;
              height: 20%;
              a {
                box-sizing: border-box;
                border: 1px solid #eee;
              }
              a:nth-of-type(1) {
                width: 80%;
                height: 100%;
              }
              a:nth-of-type(2) {
                width: 20%;
                height: 100%;
              }
              img {
                width: 100%;
                height: 100%;
              }
            }

          }
        }
        // 热门专业
        .hot-domain-party {
          margin-top: 30px;
          box-sizing: border-box;
          ul {
            display: flex;
            border-bottom: 2px solid #00c2b3;
            li {
              width: 10%;
              padding: 10px 0;
              text-align: center;
            }
            li.active {
              color: #00c2b3;
            }
          }
          .square-part {
            display: flex;
            flex-wrap: wrap;
            a {
              width: calc(100% / 3);
              padding: 10px 20px 0 20px;
              box-sizing: border-box;
              border: 1px solid #eee;
              text-decoration: none;
              background: #fff;
              .square-top {
                width: 100%;
                padding-bottom: 5px;
                border-bottom: 1px dashed #eee;
                .square-job-wrapper {
                  display: flex;
                  font-size: 16px;
                  justify-content: space-between;
                  .square-job-title {
                    color: #353535;
                  }
                  .square-salary {
                    color: #ff0000;
                  }
                }
                .square-job-bottom {
                  margin-top: 2px;
                  span {
                    font-size: 12px;
                    padding: 0 4px;
                    color: #353535;
                    border-right: 2px solid #eee;
                  }
                }
                &:hover .square-job-title {
                  color: #5dd5c8
                }
              }
              .square-bottom {
                display: flex;
                padding: 5px 0 10px 0;
                align-items: center;
                img {
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  background: palegoldenrod;
                }
                span {
                  margin-left: 15px;
                  font-size: 14px;
                  color: #8D92A1;
                }
                span:nth-of-type(1) {
                  font-size: 16px;
                  color: #61687C;

                }
                &:hover {
                  background: #FAFAFA;
                }
              }
              &:hover {
                box-shadow: 3px 3px 4px #eee;
                z-index: 999;
              }
            }
            .no-data{
              width: 100%;
              padding:150px 0;
              font-size: 16px;
              color:#aaa;
              opacity: 0.8;
              text-align: center;
            }
          }
        }
        //查看更多
        .getMore {
          margin:20px 0;
          text-align: center;
          button {
            outline: none;
            border: none;
            width: 250px;
            height: 30px;
            font-size: 16px;
            color: #5DD5c8;
            line-height: 30px;
            background-color: #fff;
            border: 1px #5dd5c8 solid;
            &:hover {
              background: #5dd5c8;
              color: #fff;
            }
          }
        }
        //企业巨头
        .company-giant {
          margin-top: 30px;
          box-sizing: border-box;
          ul {
            display: flex;
            border-bottom: 2px solid #00c2b3;
            li {
              width: 10%;
              padding: 10px 0;
              text-align: center;
            }
            li.active {
              color: #00c2b3;
            }
          }
          .company-square
          {
            display: flex;
            flex-wrap: wrap;
            a{
              width: 25%;
              box-sizing:border-box ;
              padding:10px 20px;
              border: 1px solid #eee;
              background: #fff;
              .company-square-top
              {
                display: flex;
                justify-content: space-between;
                width: 100%;
                .cst-left
                {
                  width: 30%;
                  img{
                    width: 40px;
                    height: 40px;
                    border-radius:10px;
                  }
                }
                .cst-right
                {
                  font-size:12px;
                  color:#898E9D;
                  width: 70%;
                  text-align: right;
                  .cstr-top
                  {
                    font-size: 16px;
                    color:#353535;
                  }
                  .cstr-bottom
                  {
                    margin-top:5px;
                    span{
                      padding: 0px 8px;
                    }
                    span:nth-of-type(1)
                    {
                      border-right:2px solid #eee;
                    }
                  }
                }
                &:hover .cstr-top span{
                  color:#00c2b3;
                }
              }
              .company-square-bottom
              {
                width: 70%;
              }
              &:hover{
                box-shadow:3px 3px 4px #eee;
                z-index: 999;
              }
            }
            .no-data
            {
              width: 100%;
              padding: 100px 0;
              text-align: center;
              font-size: 16px;
              color:#aaa;
              opacity: 0.8;
            }

          }

        }
      }
    }
</style>
