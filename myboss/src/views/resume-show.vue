<template>
  <div>
    <div class="resume-container">
      <div class="resume-main">
        <!--求职者的个人信息区-->
        <div class="resume-main-info">
          <!--展示区-->
          <div class="resume-main-show">
            <div class="resume-top-left">
              <div class="rtl-name">{{this.resumeData.name}} &nbsp;<i v-if="this.resumeData.sex=='男'" class="iconfont icon-nanxing" style=" color:#00C2B3;opacity: 0.5;"></i><i v-if="this.resumeData.sex=='女'" class="iconfont icon-nvxing " style="font-size:16px;color:#FF9797;"></i></div>
              <div class="rtl-work-state">
                <span><i class="iconfont icon-nianling "></i>&nbsp;&nbsp;{{this.resumeData.handlerAge}}</span>
                <span><i class="iconfont icon-bangong "></i>&nbsp;&nbsp;{{this.resumeData.handlerWorkException}}</span>
                <span><i class="iconfont icon-Highest "></i>&nbsp;&nbsp;{{this.resumeData.handlerEducation}}</span>
                <span><i class="iconfont icon-lizhi "></i>&nbsp;&nbsp;{{this.resumeData.handlerWorkState}}</span>
              </div>
              <div class="rtl-contact-away">
                <span><i class="iconfont icon-weibiaoti"></i>&nbsp;&nbsp;{{this.resumeData.phone}}</span>
                <span><i class="iconfont icon-weixin "></i>&nbsp;&nbsp;{{this.resumeData.wxCode}}</span>
              </div>
              <div class="rtl-email">
                <i class="iconfont icon-youxiang"></i>&nbsp;&nbsp;{{this.resumeData.email}}
              </div>
            </div>
            <div class="resume-top-right">
              <img class="avatar" src="https://img2.bosszhipin.com/boss/avatar/avatar_15.png" />
            </div>
            <div class="interview" @click="handlerClickInterview"><i class="iconfont icon-yaoqing1  "></i>&nbsp;&nbsp;面试邀请</div>
          </div>
        </div>
        <!--个人优势区-->
        <div class="person-advantage">
          <div class="person-advantage-show" >
            <div class="pas-header">个人优势</div>
            <div class="pas-wrapper">
              <div class="pas-main" v-html="this.resumeData.advantage" ></div>
            </div>
          </div>
        </div>
        <!--期望职位区-->
        <div class="expect-position-party">
          <div class="expp-header">
            <span>期望职位</span>
          </div>
          <div class="expect-position-main-show">
            <div class="expect-position-main-item" >
              <div class="epmi-info">
                <span><i class="iconfont icon-zhiwei1"></i>&nbsp;&nbsp;{{this.resumeData.exceptionPosition}}</span>
                <span><i class="iconfont icon-xinzi"></i>&nbsp;&nbsp;{{this.resumeData.exceptSalary}}K</span>
                <span><i class="iconfont icon-hangye"></i>&nbsp;&nbsp;{{this.resumeData.exceptionIndustry.name}}</span>
                <span><i class="iconfont icon-dizhi"></i>&nbsp;&nbsp;{{this.resumeData.exceptionPlace}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--工作经历-->
        <div class="person-advantage">
          <div class="person-advantage-show" >
            <div class="pas-header">工作经历</div>
            <div class="pas-wrapper" >
              <div class="pas-main" v-html="this.resumeData.workExperience" style="text-align: left"></div>
            </div>
          </div>
        </div>
        <!--项目经验-->
        <div class="person-advantage">
          <div class="person-advantage-show" >
            <div class="pas-header">项目经验</div>
            <div class="pas-wrapper">
              <div class="pas-main" v-html="this.resumeData.projectExperience" ></div>
            </div>
          </div>
        </div>
      </div>
      <el-dialog title="编辑面试信息" :visible.sync="dialogInterviewVisible"  class="dialog-interview">
        <quill-editor
          v-model="interviewTextArea"
          :options="editorOption"
          ref="myQuillEditor3"
        >
        </quill-editor>
        <div class="btns-wrapper">
          <el-button @click="dialogInterviewVisible = false">取 消</el-button>
          <el-button type="primary" @click="SaveInterview">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import {quillEditor, Quill} from 'vue-quill-editor'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.snow.css'
  import footerNav from "../components/footerNav";

  export default {
    name: "resume-show",
    data()
    {
      return{
        dialogInterviewVisible:false,
        //简历的ID
        resumeId:"",
        //简历信息
        resumeData:{},
        //富文本配置项
        editorOption: {
          placeholder:'小直直：请您务必公司的地理位置和联系方式是正确的，大家都不容易。',
          modules: {
            toolbar: [
              [{'list':'bullet'},{'list':'ordered'}],
              ['bold','italic','underline','strike'],
              [{'header':[1,2,3,4,5,6]}]
            ]
          }
        },
        interviewTextArea:"",
        companyId:"",
      }
    },
    methods:{
      /***
       * 获取简历数据
       */
      getResumeData(id)
      {

        this.$axios.get(`resume/definite/${id}`).then(res=>{
          console.log("resume,,",res);
          if(res.code==200)
          {
            if(res.data.length>0)
            {
              let data=res.data[0];
              let startYear=new Date(data.startDate).getFullYear();
              let birthYear=new Date(data.birthDate).getFullYear();
              let handlerWorkException=new Date().getFullYear()-startYear <=0 ? '应届生' : `${new Date().getFullYear()-startYear}年工作经验`;
              let handlerAge=new Date().getFullYear()-birthYear;
              let handlerWorkState="";
              let handlerEducation="";
              switch (data.workState)
              {
                case "0" :
                  handlerWorkState='离职-随时到岗';
                  break;
                case "1" :
                  handlerWorkState="在职-考虑机会";
                  break;
                case "2" :
                   handlerWorkState="在职-月内到岗";
                   break;
              }
              switch (data.education)
              {
                case "0" :
                  handlerEducation="专科";
                  break;
                case "1" :
                  handlerEducation="本科";
                  break;
                case "2" :
                  handlerEducation="硕士";
                  break;
                case "3" :
                  handlerEducation="博士";
                  break;
                case "4" :
                  handlerEducation="博士以上";
                  break;
              }
              data.handlerWorkException=handlerWorkException;
              data.handlerAge=handlerAge;
              data.handlerEducation=handlerEducation;
              data.handlerWorkState=handlerWorkState;
              this.resumeData=data;
            }
          }else{
            this.$message.info(res.msg);
          }
        }).catch(err=>{
          console.log(err);
          this.$message.error("数据获取失败，请检查网络连接！")
        })
      },
      /***
       * 发起面试邀请函数
       */
      handlerClickInterview()
      {
         this.$confirm("您确定向这位求职者发起面试邀请？",'提示',{
            confirmButtonText:"确定",
            cancelButtonText:"取消",
            type:"success"
         }).then(res=>{
           this. dialogInterviewVisible=true;
         }).catch(err=>{
         })
      },
      /**
       * 保存面试邀请内容
       * @constructor
       */
      SaveInterview()
      {
        let data={
          content:this.interviewTextArea,
          sponsor:this.$store.state.userInfo.id,
          company:this.companyId,
          hunterPhone:this.resumeData.phone,
        }
        this.$axios.post("interview/add",data).then(res=>{
          console.log("saveInterview",res);
          if(res.code==200)
          {
            this.$message.success(res.msg);
            this. dialogInterviewVisible=false;
            this.interviewTextArea="";

          }else{
            this.$message.info(res.msg);
            this. dialogInterviewVisible=false;
          }

        }).catch(err=>{
          console.log(err);
          this.$message.error("面试邀请发送失败，请检查你的网络连接！");
        })
      }
    },
    components:{
      quillEditor,
      footerNav
    },
    computed:{



    },
    created()
    {
      let{resumeId,companyId}=this.$route.query;
      this.resumeId=resumeId;
      this.companyId=companyId;
      this.getResumeData(resumeId,)

    }
  }
</script>

<style scoped lang="scss">
  .resume-container
  {
    width: 1000px;
    height:800px;
    margin:0 auto;
    .resume-main
    {
      width:1000px;
      margin:15px 0 0;
      padding:30px 30px;
      background-color: #fff;
      box-sizing: border-box;
      //简历的信息
      .resume-main-info
      {
        //border:1px solid #aaa;
        .resume-main-show
        {
          display: flex;
          justify-content: space-between;
          padding-bottom:15px;
          .resume-top-left
          {
            font-size: 14px;
            color:#414A60;
            .rtl-name
            {
              font-size: 24px;
              color:#414A60;
              margin-bottom:15px;
            }
            .rtl-work-state
            {
              margin-top:10px;
              span{
                padding:0 20px;
                border-right: 1px solid #e0e0e0;;
              }
              span:first-of-type
              {
                padding-left:0;
              }
              span:last-of-type
              {
                border-right:none;
              }
            }
            .rtl-contact-away
            {
              margin-top:15px;
              span{
                padding:0 20px;
              }
              span:nth-of-type(1)
              {
                padding-left:0;
                border-right: 1px solid #e0e0e0;
              }
            }
            .rtl-email
            {
              margin-top:15px;
            }

          }
          .resume-top-right
          {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-right:-180px;
            .avatar
            {
              width: 80px;
              height:80px;
              border-radius:50%;
            }
            .edit{
              font-size: 14px;
              color:#00C2B3;
              marin-right:10px;
            }
          }
          .interview
           {
             font-size: 16px;
             color:#5dd5c8;
             &:hover{
               color:#00C2B3;
             }
           }


        }
        .resume-main-edit
        {
          h4{
            margin-top:0;
            color:#24272E;
          }
          .title
          {
            font-size: 14px;
            padding:3px 0px 8px;
            color:#414A60;
          }
        }

      }
      //个人优势区
      .person-advantage
      {
        padding:15px 0 ;
        //border:1px solid #aaa;
        &:hover .pas-wrapper
        {
          background-color: #F2F5F9;
        }
        .person-advantage-show
        {
          .pas-header
          {
            font-size: 18px;
            color:#24272E;
            &::before
            {
              display: inline-block;
              content:"";
              width: 3px;
              height:20px;
              vertical-align: bottom;
              margin-right: 15px;
              background-color:#53CAC3;
            }
          }
          .pas-wrapper
          {
            margin-top:15px;
            /*div:nth-of-type(1)*/
            /*{*/
              /*padding:10px 37px 0 0;*/
              /*box-sizing: border-box;*/
              /*font-size: 14px;*/
              /*color:#00C2B3;*/
              /*text-align: right;*/
            /*}*/
            .pas-main
            {
              min-height: 50px;
              font-size: 14px;
              color: #61687C;
            }
          }
          .pas-main
          {
            margin-top:15px;
          }
        }
      }
      //期望职位区
      .expect-position-party
      {
        //border:1px solid #aaa;
        padding:15px 0  0;
        .expp-header
        {
          display: flex;
          justify-content: space-between;
          span:nth-of-type(1)
          {
            font-size: 18px;
            color:#24272E;
            &:before{
              display: inline-block;
              content:"";
              width: 3px;
              height:20px;
              vertical-align: bottom;
              margin-right: 15px;
              background-color:#53CAC3;
            }
          }
          span:nth-of-type(2)
          {
            margin-right:37px;
            font-size: 14px;
            color:#53CAC3
          }
        }

        .expect-position-main-show
        {
          //border:1px solid #aaa;
          margin-top:15px;
          .expect-position-main-item
          {
            display: flex;
            font-size: 14px;
            padding:10px 0;
            justify-content: space-between;
            .epmi-info
            {
              color:#414A60;
              flex:1;
              span{
                display: inline-block;
                padding:0 20px;
                border-right:1px solid #E0E0E0;
              }
              span:last-of-type
              {
                border-right: none;
              }
            }
            .epmi-editorBtn
            {
              display: none;
              margin-right: 37px;
              color:#53CAC3
            }
            &:hover .epmi-editorBtn
            {
              display: inline-block;
            }
          }
        }
        .expect-position-main-editor
        {
          .epme-mian
          {
            .title
            {
              font-size: 14px;
              padding:3px 0px 8px;
              color:#414A60;
            }
          }
        }
      }
    }
    /**注意使用深度选择器*/
    /deep/
    .ql-container
    {
      height:400px;
    }
    .dialog-interview
    {
      .btns-wrapper
      {
        margin-top:15px;
        text-align: right;
      }
    }
  }

</style>
