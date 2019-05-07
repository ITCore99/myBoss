<template>
    <div class="interview-container">
      <div class="interview-header">面试通知：</div>
      <div class="interview-mian" v-html="content">
      </div>
    </div>
</template>

<script>
    export default {
        name: "interview-show",
        data(){
            return{
              content:"",
            }
        },
        methods:{
          getInterviewDetail(id)
          {
            this.$axios.get(`interview/detail/${id}`).then(res=>{
              console.log("interviewData",res);
              if(res.code==200)
              {
                this.content=res.data.content;
              }else{
                this.$message.info(res.msg);
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败，请检查网络连接！")
            })
          },
          /**
           * 对面试的状态进行更改
           * @param id
           */
          updateInterviewState(id)
          {
            this.$axios.post("sponsorInterview/update/state",{id,state:1}).then(res=>{
              if(res.code==200)
              {

              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败，请检查网络连接 !")
            })
          }
        },
        created()
        {
          let interviewId=this.$route.query.id;
          let sponsorInterviewId=this.$route.query._id;
          this.getInterviewDetail(interviewId);
          this.updateInterviewState(sponsorInterviewId);
        }
    }
</script>

<style scoped lang="scss">
 .interview-container{
   width: 1000px;
   margin: 20px auto;
   border-radius: 10px;
   box-sizing: border-box;
   padding: 15px 30px 30px;
   background-color: #fff;
   .interview-header
   {
     font-size: 16px;
     font-weight: bold;
     color:#414A60;
     margin-bottom: 15px;
   }

   .interview-mian
   {
      height: 100%;
      font-size: 14px;
     color:#414A60;
      box-sizing: border-box;
      min-height: 500px;
      padding:15px;
      border: 1px solid #F7F7F7;

   }

 }

</style>
