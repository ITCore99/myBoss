<template>
     <div class="home-container">
        <div class="wrapper">
          <!--顶部查询区-->
          <div class="input-wrapper">
            <div style="height: 100%;width:80%;border:1px solid #eee;box-sizing: border-box;display: flex">
              <span>职位类型</span>
              <input type=" text"  placeholder="搜素职位、公司" />
            </div>
            <button>搜素</button>
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
                  <li v-for="(item,index) in list"  >
                    <span>信息工程</span>
                    <router-link to="">java</router-link>
                    <router-link to="">php</router-link>
                    <router-link to="">web前端</router-link>
                    <router-link to="">&gt</router-link>
                    <div class="slider-details">
                          <div class="slider-details-title">技术</div>
                          <div class="slider-details-main">
                            <div class="slider-details-classify">
                                 后端开发
                            </div>
                            <div class="slider-details-job">
                              <ul>
                                <li>后端开发</li>
                                <li>java</li>
                                <li>c++</li>
                                <li>数据挖掘</li>
                                <li>C</li>
                                <li>C#</li>
                                <li>.NET</li>
                                <li>Node.js</li>
                                <li>gg</li>
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
            <ul>
              <li>IT·互联网</li>
              <li>金融</li>
              <li>房地产·建筑</li>
              <li>教育培训</li>
              <li>汽车</li>
              <li>娱乐传媒</li>
              <li>医疗健康</li>
              <li>娱乐传媒</li>
              <li>法律咨询</li>
            </ul>
            <div class="square-part">
               <router-link to="" v-for="(item,index) in list2" v-bind:key="index">
                  <div class="square-top">
                     <div class="square-job-wrapper">
                       <div class="square-job-title">高级java开发工程师</div>
                       <div class="square-salary">20-40K</div>
                     </div>
                     <div class="square-job-bottom">
                        <span>北京</span>
                        <span>5-10年</span>
                        <span>本科</span>
                     </div>
                  </div>
                  <div class="square-bottom">
                       <img  src="https://img.bosszhipin.com/beijin/mcs/useravatar/20190408/82d6a8ecd579b9f24b7656c97356e2bfcfcd208495d565ef66e7dff9f98764da_s.jpg"/>
                       <span>国美在线</span>
                       <span>刘先生</span>
                       <span>开发经理</span>
                  </div>
               </router-link>
            </div>
            <!--查看更多-->
            <div class="getMore">
                <button>查看更多</button>
            </div>
          </div>
          <!--企业巨头区-->
          <div class="company-giant">
            <ul>
              <li>热门公司</li>
              <li>行业巨头</li>
              <li>新锐公司</li>
              <li>上市公司</li>
            </ul>
            <div class="company-square">
              <router-link to="" v-for="(item,index) in list3">
                <div class="company-square-top">
                   <div class="cst-left">
                      <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20171107/6b08163b16bcfc670480c6610be72906cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_100,limit_0"/>
                   </div>
                   <div class="cst-right">
                       <div class="cstr-top">
                            <span>小灵花科技</span>
                       </div>
                       <div class="cstr-bottom">
                            <span>天使轮</span>
                            <span>互联网金融</span>
                       </div>
                   </div>
                </div>
                <div class="company-square-bottom"></div>
              </router-link>
            </div>
          </div>
          <!--查看更多-->
          <div class="getMore">
            <button>查看更多</button>
          </div>
        </div>
       <FooterNav class="footerNav"></FooterNav>
     </div>

</template>

<script>
  import  FooterNav   from '@/components/footerNav'
    export default {
        name: "home",
        data:()=>{
          return{
            list:[0,1,2,3,4,5,6,7,8,9],
            list2:[0,1,2,3,4,5,6,7,8],
            list3:[0,1,2,3,4,5,6,7,8,9,10,11]
          }
        },
       components:{
        FooterNav,
       }

    }
</script>

<style scoped lang="scss">

    .home-container
    {
      .wrapper
      {
        width: 1247px;
        margin: 0 auto;

        .input-wrapper
        {
          display: flex;
          width: 1164px;
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
          width: 1164px;
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
                  color: #353535;
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
                     .slider-details-classify
                     {
                       display: flex;
                       align-items: center;;
                       justify-content: center;
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
                           justify-content: center;
                           align-items: center;
                           width:calc(100% / 6);
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
            li:nth-of-type(1) {
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
          }
        }
        //查看更多
        .getMore {
          margin-top: 20px;
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
            li:nth-of-type(1) {
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

          }

        }
      }
      .footerNav{
        margin-top: 20px;
      }
    }
</style>
