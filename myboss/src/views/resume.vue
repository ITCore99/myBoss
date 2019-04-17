<template>
    <div class="resume-container">
       <div class="resume-main">
          <!--求职者的个人信息区-->
          <div class="resume-main-info">
              <!--展示区-->
              <div class="resume-main-show" v-if="isShow">
                 <div class="resume-top-left">
                    <div class="rtl-name">付卓宁</div>
                    <div class="rtl-work-state">
                      <span>三年经验</span>
                      <span>本科学历</span>
                      <span>离职-随时到岗</span>
                    </div>
                    <div class="rtl-contact-away">
                       <span>17630384057</span>
                       <span>fzn18438613218</span>
                    </div>
                    <div class="rtl-email">
                       IT_fzn19970317@163.com
                    </div>
                 </div>
                 <div class="resume-top-right">
                    <img class="avatar" src="https://img2.bosszhipin.com/boss/avatar/avatar_15.png" />
                    <span class="edit"  @click="editor">编辑</span>
                 </div>
              </div>
              <!--编辑区-->
              <div class="resume-main-edit" v-if="!isShow">
                <h4>编辑个人信息</h4>
                <el-form ref="form" :model="form">
                  <el-row  type="flex" justify=space-between>
                    <el-col :span="10" >
                      <div class="title">姓名</div>
                      <el-form-item >
                        <el-input v-model="form.name" placeholder="姓名"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <div class="title">我的学历</div>
                      <el-form-item >
                        <el-select v-model="form.eduction" placeholder="请选择" style="width: 100%">
                          <el-option
                            v-for="item in eductionData"
                            :key="item"
                            :label="item"
                            :value="item">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row  type="flex" justify=space-between>
                    <el-col :span="10" >
                      <div class="title">性别</div>
                      <el-form-item >
                        <el-radio-group v-model="form.sex" size="medium" style="width: 100%;" >
                          <el-radio border label="男"  style="width:45%"></el-radio>
                          <el-radio border label="女"  style="width:43%"></el-radio>
                        </el-radio-group>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <div class="title">开始工作时间</div>
                      <el-form-item>
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.startDate" style="width: 100%;">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row  type="flex" justify=space-between>
                    <el-col :span="10" >
                      <div class="title">生日</div>
                      <el-form-item >
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.birthDate" style="width: 100%;">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <div class="title">微信号</div>
                      <el-form-item >
                        <el-input v-model="form.wxCode" placeholder="微信号"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row  type="flex" justify=space-between>
                    <el-col :span="10" >
                      <div class="title">电话</div>
                      <el-form-item >
                        <el-input v-model="form.phone" placeholder="电话"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <div class="title">邮箱</div>
                      <el-form-item >
                        <el-input v-model="form.email" placeholder="邮箱"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row  type="flex" justify="start">
                    <el-col :span="10" >
                      <div class="title">当前求职状态</div>
                      <el-form-item >
                        <el-select v-model="form.workState" placeholder="请选择" style="width: 100%">
                          <el-option
                            v-for="item in workStates"
                            :key="item"
                            :label="item"
                            :value="item">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row  type="flex" justify="end">
                    <el-col :span="4" >
                      <el-button>取消</el-button>
                      <el-button @click="complete">完成</el-button>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
          </div>
          <!--个人优势区-->
          <div class="person-advantage">
             <div class="person-advantage-show" >
               <div class="pas-header">个人优势</div>
               <div class="pas-wrapper" v-if="advantageIsShow">
                 <div><span @click="AdvantageEditor">编辑</span></div>
                 <div class="pas-main" v-html="textArea" ></div>
               </div>
             </div>
             <div class="person-advantage-editor" v-if="!advantageIsShow">
               <h4>编辑个优势</h4>
               <quill-editor
                 v-model="textArea"
                 :options="editorOption"
                 ref="myQuillEditor"
                 @change="onEditorBlur($event)"
               >
               </quill-editor>
               <el-row  type="flex" justify="end" style="margin-top:20px">
                 <el-col :span="4" >
                   <el-button>取消</el-button>
                   <el-button @click="AdvantageComplete">完成</el-button>
                 </el-col>
               </el-row>
             </div>
          </div>
         <!--期望职位区-->
         <div class="expect-position-party">
           <div class="expp-header">
             <span>期望职位</span>
             <span>添加</span>
           </div>
           <div class="expect-position-main-show" v-if="expectedIsShow">
              <div class="expect-position-main-item">
                <div class="epmi-info">
                   <span>web前端</span>
                   <span>10k-15K</span>
                   <span>移动互联网</span>
                   <span>北京</span>
                </div>
                <span class="epmi-editorBtn" @click="ExceptEditor">编辑</span>
              </div>
           </div>
           <div class="expect-position-main-editor" v-if="!expectedIsShow">
             <h4>编辑期望职位</h4>
             <div class="epme-mian">
               <el-form ref="form2" :model="form2" >
                 <!--这里等数据接口对接完毕后在进行修改-->
                 <el-row  type="flex" justify=space-between>
                   <el-col :span="10" >
                     <div class="title">期望职位</div>
                     <el-form-item >
                       <el-input v-model="form2.expectPosition" placeholder="期望职位"></el-input>
                     </el-form-item>
                   </el-col>
                   <el-col :span="10">
                     <div class="title">薪资要求</div>
                     <el-form-item >
                       <el-input v-model="form2.salary" placeholder="例如：15-16K"></el-input>
                     </el-form-item>
                   </el-col>
                 </el-row>
                 <el-row  type="flex" justify=space-between>
                   <el-col :span="10" >
                     <div class="title">行业</div>
                     <el-form-item >
                       <el-select v-model="form2.industry" placeholder="请选择" style="width: 100%">
                         <el-option
                           v-for="item in industryData"
                           :key="item"
                           :label="item"
                           :value="item">
                         </el-option>
                       </el-select>
                     </el-form-item>
                   </el-col>
                   <el-col :span="10">
                     <div class="title" >城市</div>
                     <el-form-item>
                       <el-cascader
                         expand-trigger="hover"
                         :options="cityData"
                         v-model="form2.selectedOptions"
                         @change="handleChange" style="width: 100%">
                       </el-cascader>
                     </el-form-item>
                   </el-col>
                 </el-row>
                 <el-row  type="flex" justify="end" style="margin-top:20px">
                   <el-col :span="4" >
                     <el-button>取消</el-button>
                     <el-button @click="ExceptComplete">完成</el-button>
                   </el-col>
                 </el-row>
               </el-form>
             </div>
           </div>
         </div>
         <!--工作经历-->
         <div class="person-advantage">
           <div class="person-advantage-show" >
             <div class="pas-header">工作经历</div>
             <div class="pas-wrapper" v-if="workExperienceIsShow">
               <div><span @click="workExperienceEditor">编辑</span></div>
               <div class="pas-main" v-html="textArea" ></div>
             </div>
           </div>
           <div class="person-advantage-editor" v-if="!workExperienceIsShow">
             <h4>编辑工作经历</h4>
             <quill-editor
               v-model="textArea"
               :options="editorOption"
               ref="myQuillEditor"
               @change="onEditorBlur($event)"
             >
             </quill-editor>
             <el-row  type="flex" justify="end" style="margin-top:20px">
               <el-col :span="4" >
                 <el-button>取消</el-button>
                 <el-button @click="workExperienceComplete">完成</el-button>
               </el-col>
             </el-row>
           </div>
         </div>
       </div>
    </div>
</template>

<script>
    import {quillEditor, Quill} from 'vue-quill-editor'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.snow.css'
    export default {
        name: "resume",
        data()
        {
          return{
            form:{
              name:"",
              workState:"",
              sex:'',
              startDate:"",
              birthDate:"",
              wxCode:"",
              phone:"",
              email:"",
              eduction:""
            },
            form2:{
              salary:"",
              expectPosition:"",
              industry:"",
              selectedOptions:"",
            },
            isShow:true,
            advantageIsShow:true,
            expectedIsShow:true,
            workExperienceIsShow:true,
            industryData:['互联网/IT/电子/通信','广告/传媒/文化/体育','金融','教育培训','交通/物流/贸易/零售','专业服务'],
            textArea:"",
            workStates:['离职-随时到岗','在职-考虑机会','在职-月内到岗'],
            eductionData:['大专以下','大专','本科','硕士','博士','博士以上'],
            editorOption: {
              placeholder:`请按照有序的条例将自己的优势罗列出来`,
              modules: {
                toolbar: [
                    [{'list':'bullet'},{'list':'ordered'}]
                  ]
              }
            },
            cityData:[
              {value:"北京",label:"北京",children:[{value:"北京",label:"北京"}]},
              {value:"天津",label:"天津",children:[{value:"天津",label:"天津"}]},
              {value:"河南",label:"河南",children:[{value:"郑州",label:"郑州"},{value:"洛阳",label:"洛阳"}]}
             ]
            }
          },
        methods:{
          complete()
          {
            this.isShow=true;
            console.log("info",this.form);
          },
          editor()
          {
            this.isShow=false;
          },
          onEditorBlur({  html, })
          {
            this.textArea=html
          },
          AdvantageComplete()
          {
            this.advantageIsShow=true;
          },
          AdvantageEditor()
          {
            this.advantageIsShow=false;
          },
          handleChange()
          {

          },
          ExceptEditor()
          {
            this.expectedIsShow=false;
          },
          ExceptComplete()
          {
            console.log("点击执行了")
            this.expectedIsShow=true;
          },
          workExperienceComplete()
          {
            this.workExperienceIsShow=true
          },
          workExperienceEditor()
          {
            this.workExperienceIsShow=false
          }


        },
      components:{
          quillEditor,
      }
    }
</script>

<style scoped lang="scss">
  .resume-container
  {
    width: 1200px;
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
            margin-right:15px;
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
            div:nth-of-type(1)
            {
              padding:10px 37px 0 0;
              box-sizing: border-box;
              font-size: 14px;
              color:#00C2B3;
              text-align: right;
            }
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
        .person-advantage-editor
        {
          margin-top:15px;
          h4{
            margin-top:0;
            color:#24272E;
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
      min-height:100px;
    }
  }

</style>
