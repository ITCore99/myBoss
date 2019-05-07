<template>
   <div class="interview-list-container">
     <div class="ilc-item" v-for="item in interviewList">
       <div class="ilc-item-top">
         <img src="https://img.bosszhipin.com/beijin/mcs/bar/brand/84270.jpg?x-oss-process=image/resize,w_120,limit_0">
         <div class="iit-right">
            <div class="iitr-name">{{item.company.name}}</div>
            <div class="iitr-tags">
              <span>{{item.handlerFancing}}</span>
              <span>{{item.handlerScale}}&nbsp;</span>
              <span>{{item.company.industry.name}}</span>
            </div>
         </div>
       </div>
       <div class="ilc-item-middle">
         <div :class="item.state ==0 ? ' iim-state no-read' : 'iim-state read'" ><i class="iconfont icon-zhuangtai
 "></i>&nbsp;&nbsp;{{item.state == 0 ? '未读' : '已读'}}</div>
       </div>
       <div class="ilc-item-bottom">
          <div class="iib-info-wrapper">
              <div style="text-align: center">
                <img src="https://img2.bosszhipin.com/boss/avatar/avatar_14.png?x-oss-process=image/resize,w_100,limit_0"/>
                <span class="iiiw-name">{{item.sponsor.username}}</span>
              </div>
              <div class="iiiw-time">时间：{{item.handlerDate}}</div>
          </div>
          <div class="btn-wrapper">
            <button @click="goInterview(item.interview,item._id)">查看内容</button>
          </div>
       </div>
     </div>
   </div>
</template>

<script>
    export default {
        name: "interview-list",
        data(){
          return{
            interviewList:[],
          }
        },
        methods:{
          getInterViewListData()
          {
            this.$axios.get(`sponsorInterview/${this.$store.state.userInfo.id}`).then(res=>{
              //console.log("苦痛",res);
              if(res.code==200)
              {
                if(res.data.length>0)
                {
                  res.data.forEach(item=>{
                    let handlerFancing="";
                    let handlerScale="";
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
                    let date=new Date(item.time);
                    item.handlerDate=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                    item.handlerFancing=handlerFancing;
                    item.handlerScale=handlerScale;
                  });

                }
                this.interviewList=res.data;
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败，请检查呢网络连接！")
            })
          },
          goInterview(id,_id)
          {
            this.$router.push({path:"/interview/show",query:{id,_id}});
          }
        },
       created(){
          this.getInterViewListData();
       }
    }
</script>

<style scoped lang="scss">
.interview-list-container
{
  width:1000px;
  height: 500px;
  margin:15px auto;
  border:1px solid #eee;

  .ilc-item
  {
    display: flex;
    padding:10px 10px 10px 15px;
    background-color: #fff;
    border-bottom:1px #f2f2f5 solid;
    .ilc-item-top
    {
      width: calc(100% / 3);
      box-sizing: border-box;
      display: flex;
      img{
        width:50px;
        height: 50px;
        border-radius: 10px;
      }
      .iit-right
      {
         display: flex;
         margin-left: 15px;
         flex-direction: column;
         justify-content: space-around;
        .iitr-name
        {
          font-size: 16px;
          color:#414A60;
        }
        .iitr-tags
        {
          span{
            font-size: 12px;
            color:#898E9D;
            padding:0 5px;
          }
          span:nth-of-type(1),span:nth-of-type(2)
          {
            border-right: 1px solid #ddd;
          }
        }
      }
    }
    .ilc-item-middle
    {
      width: calc(100% / 3);
      height: 60px;
    //  border: 1px solid #aaa;
      display: flex;
      align-items: center;
      .iim-state
      {
        margin: 0 auto;
        &.read{
          color:#aaa;
        }
        &.no-read{
          color:#FC703E;
        }
      }

    }
    .ilc-item-bottom
    {
      display: flex;
      width: calc(100% / 3);
      height: 60px;
      justify-content: flex-end;
      align-items: center;
      .iib-info-wrapper
      {
        display: flex;
        flex-direction: column;
        margin-right: 25px;
        img{
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 15px;

          }
        .iiiw-name
        {
          font-size: 13px;
          color:#414A60;
        }
        .iiiw-time
        {
          margin-top: 8px;
          font-size: 12px;
          color:#9fA3B0;
        }
      }
      .btn-wrapper
      {
        display: none;
         margin-right:65px;
        button{
          outline: none;
          border: none;
          width:100px;
          height: 40px;
          border-radius: 3px;
          font-size: 14px;
          text-align: center;
          line-height: 40px;
          color:#fff;
          background-color:#00C2B3;
        }
      }

    }
    &:hover
    {
      background-color: #fAFAFA;
      .iib-info-wrapper{
        display: none;
      }

      .btn-wrapper
      {
        display: block;
      }

    }

  }

}
</style>
