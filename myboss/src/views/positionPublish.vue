<template>
  <div>
    <div class="position-publish-container">
      <div class="position-basic-info">
        <div class="cip-header">基础信息</div>
        <el-form ref="form" :model="form">
          <el-row  type="flex" justify=space-between>
            <el-col :span="10" >
              <div class="title">职位名称</div>
              <el-form-item >
                <el-input v-model="form.name" placeholder="姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <div class="title">职位类型</div>
              <el-form-item >
                <el-select v-model="form.positionClassify" placeholder="请选择" style="width: 100%">
                  <el-option
                    v-for="item in  positionClassifyData"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  type="flex" justify=space-between>
            <el-col :span="10" >
              <div class="title">职位类型</div>
              <el-form-item >
                <el-select v-model="form.industry" placeholder="请选择" style="width: 100%">
                  <el-option
                    v-for="item in    industryData"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <div class="title">所属学院</div>
              <el-form-item >
                <el-select v-model="form.college" placeholder="请选择" style="width: 100%">
                  <el-option
                    v-for="item in   collegeData"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  type="flex" justify=space-between>
            <el-col :span="10" >
              <div class="title">团队氛围</div>
              <el-form-item >
                <el-input v-model="form.team" placeholder="美女如云，领导nice，地铁周边"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <div class="title">工作城市</div>
              <el-form-item >
                <el-form-item >
                  <el-input v-model="form.city" placeholder="如：北京"></el-input>
                </el-form-item>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  type="flex" justify=space-between>
            <el-col :span="10" >
              <div class="title">具体地址</div>
              <el-form-item >
                <el-form-item >
                  <el-input v-model="form.address" placeholder="如：北京市昌平区西二旗科技园"></el-input>
                </el-form-item>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <div class="title">招聘人</div>
              <el-form-item >
                  <el-form-item >
                    <el-input v-model="form.recruiter" placeholder="招聘人" :disabled="true"></el-input>
                  </el-form-item>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  type="flex" justify=space-between>
            <el-col :span="10" >
              <div class="title">招聘人职务</div>
              <el-form-item >
                  <el-input v-model="form.recruiterPosition" placeholder="如人事经理"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item >

              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="position-require">
        <div class="cip-header">职位要求</div>
        <el-form ref="form" :model="form">
          <el-row type="flex" justify=space-between>
            <el-col :span="10" >
              <div class="title">工作经验</div>
              <el-form-item >
                <el-select v-model="form.workExperience" placeholder="请选择" style="width: 100%">
                  <el-option
                    v-for="item in  experienceFilterData"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <div class="title">学历要求</div>
              <el-form-item >
                  <el-select v-model="form.education" placeholder="请选择" style="width: 100%">
                  <el-option
                    v-for="item in    educationData"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" justify=space-between>
            <el-col :span="10" >
              <div class="title">薪资要求</div>
              <el-form-item >
                  <el-input v-model="form.salary" placeholder="如：10-20"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="position-responsibility">
        <div class="cip-header">职位职责</div>
        <quill-editor
          v-model="form.Function"
          :options="editorOption"
          ref="myQuillEditor3"
        >
        </quill-editor>
        <el-row  type="flex" justify="end" style="margin-top:20px">
          <el-col :span="4" >
            <el-button  type="primary" size="medium" style="width:150px;height:40px;background: #00C2B3" @click="savePosition">发布</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
   <footer-nav></footer-nav>

  </div>
</template>

<script>
    import {quillEditor, Quill} from 'vue-quill-editor'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.snow.css'
    import footerNav from "../components/footerNav"
    export default {
        name: "positionPublish",
        data(){
          return{
            form:{
              name:"",
              positionClassify:"",
              college:"",
              industry:"",
              city:"",
              address:"",
              workExperience:"",
              education:"",
              salary:"",
              recruiter:this.$store.state.userInfo.username,
              recruiterPosition:"",
              Function:"",
              team:"",
            },
            editorOption: {
              placeholder:`请按照有序的条例将职位要求列出来罗列出来`,
              modules: {
                toolbar: [
                  [{'list':'bullet'},{'list':'ordered'}],
                  ['bold','italic','underline','strike'],
                  [{'header':[1,2,3,4,5,6]}]
                ]
              }
            },
            industryData:[],
            collegeData:[],
            positionClassifyData:[],
            educationData:[{name:"大专",value:"0"},{name:'本科',value:"1"},{name:'硕士',value:"2"},{name:'博士',value:'3'},{name:'博士以上',value:"4"}],
            experienceFilterData:[
              {name:"应届生" ,value:"0"} ,
              {name:"1-3年" ,value:"1"} ,
              {name:"3-5年" ,value:"2"},
              {name:"5-10年" ,value:"3"} ,
              {name:"10年以上" ,value:"4"}
            ],
          }
        },
        methods:{
         getIndustryData()
         {
           this.$axios.get("/industry/list").then(res=>{
             if(res.code==200)
             {
               this.industryData=res.data;
             }else{
               this.$message.info(res.msg);
             }
           }).catch(err=>{
             console.log(err);
             this.$message.error("获取数据失败请检查网络连接！")
           })
         },
          getCollegeData()
          {
            this.$axios.get("/college").then(res=>{
              if(res.code==200)
              {
                this.collegeData=res.data;
              }else{
                this.$message.info(res.msg);
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败请检查网络连接!");
            })
          },
          getPositionClassify()
          {
            this.$axios.get("posClassify/list").then(res=>{
              if(res.code==200)
              {
                this.positionClassifyData=res.data;
              }else{
                this.$message.info(res.msg);
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败请检查网络连接!");
            })
          },
          savePosition()
          {
            console.log("save",this.form);
            this.$axios.post("position/add",{...this.form,company:this.$store.state.companyId}).then(res=>{
              if(res.code==200)
              {
                this.$message.success("发布成功");
                let data={
                  name:"",
                  positionClassify:"",
                  college:"",
                  industry:"",
                  city:"",
                  address:"",
                  workExperience:"",
                  education:"",
                  salary:"",
                  recruiter:this.$store.state.userInfo.username,
                  recruiterPosition:"",
                  Function:"",
                  team:"",
                };
                this.form=data;
              }else{
                this.$message.info(res.msg);
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败请检查网络连接!");
            })
          }
        },
        components:{
          quillEditor,
          footerNav
        },
        created()
        {
          this.getIndustryData();
          this.getCollegeData();
          this.getPositionClassify();
        }
    }
</script>

<style scoped lang="scss">
.position-publish-container
{
  margin:0 auto;
  width:1000px;
  background-color: #fff;
  .position-basic-info
  {
    padding:15px 30px;
  }
  .position-require
  {
    padding:0 30px;
  }
  .position-responsibility
  {
    padding:0 30px 30px;
    margin-bottom: 50px;
  }
  .position-basic-info,.position-require,.position-responsibility
  {
      .title
      {
        font-size: 14px;
        padding:3px 0px 8px;
        color:#414A60;
      }
      .cip-header
      {
        margin-bottom: 15px;
        font-size: 18px;
        color: #24272E;
        &::before {
          display: inline-block;
          content: "";
          width: 3px;
          height: 20px;
          vertical-align: bottom;
          margin-right: 15px;
          background-color: #53CAC3;
        }
      }

  }
  /deep/
  .ql-container
  {
    min-height:300px;
  }

}
</style>
