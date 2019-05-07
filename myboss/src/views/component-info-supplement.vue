<template>
    <div class="company-info-supplement-container">
       <!--公司基本信息区-->
       <div class="company-info-part">
         <div style="display: flex;justify-content: space-between;align-items: center">
           <div class="cip-header">公司信息</div>
           <div class="editorBtn" @click="splitterEdit(0)">编辑</div>
         </div>
         <div class="company-info-show" v-show="!isShow">
            <div class="cis-left">
              <div class="cisl-top">
                <span><i class="iconfont  icon-jigou" ></i>&nbsp;&nbsp;&nbsp;{{form.name}}</span>
                <span><i class="iconfont icon-hangye"></i>&nbsp;&nbsp;&nbsp;{{form.industry}}</span>
                <span><i class="iconfont icon-zhexian" ></i>&nbsp;&nbsp;&nbsp;{{form.financing}}</span>
              </div>
              <div class="cisl-middle">
                <span><i class="iconfont icon-yonghu" ></i>&nbsp;&nbsp;&nbsp; {{form.scale}}</span>
                <span><i class="iconfont icon-hangye- "></i>&nbsp;&nbsp;&nbsp;{{form.type}}</span>
                <span><i class="iconfont icon-youxiang"></i>&nbsp;&nbsp;&nbsp;{{form.email}}</span>
              </div>
              <div class="cisl-bottom">
                <span><i class="iconfont icon-dizhi"></i>&nbsp;&nbsp;&nbsp;{{form.address}}</span>
                <span><i class="iconfont icon-more" ></i> &nbsp;&nbsp;&nbsp; {{form.net}}</span>
              </div>
            </div>
            <div class="cis-right">
              <div class="company-avatar"></div>
            </div>
         </div>
         <div class="company-info-part-editor" v-show="isShow">
           <h4>编辑公司信息</h4>
           <el-form ref="form" :model="form">
             <el-row  type="flex" justify=space-between>
               <el-col :span="10" >
                 <div class="title">公司名称</div>
                 <el-form-item >
                   <el-input v-model="form.name" placeholder="公司名"></el-input>
                 </el-form-item>
               </el-col>
               <el-col :span="10">
                 <div class="title">所属行业</div>
                 <el-form-item >
                   <el-select v-model="form.industry" placeholder="请选择" style="width: 100%">
                     <el-option
                       v-for="item in  industryData"
                       :key="item._id"
                       :label="item.name"
                       :value="item.name">
                     </el-option>
                   </el-select>
                 </el-form-item>
               </el-col>
             </el-row>
             <el-row  type="flex" justify=space-between>
               <el-col :span="10" >
                 <div class="title">融资状态</div>
                 <el-form-item >
                   <el-select v-model="form.financing" placeholder="请选择" style="width: 100%">
                     <el-option
                       v-for="item in   fancingData"
                       :key="item.value"
                       :label="item.name"
                       :value="item.name">
                     </el-option>
                   </el-select>
                 </el-form-item>
               </el-col>
               <el-col :span="10">
                 <div class="title">公司规模</div>
                 <el-form-item >
                   <el-select v-model="form.scale" placeholder="请选择" style="width: 100%">
                     <el-option
                       v-for="item in  ScaleData"
                       :key="item.value"
                       :label="item.name"
                       :value="item.name">
                     </el-option>
                   </el-select>
                 </el-form-item>
               </el-col>
             </el-row>
             <el-row  type="flex" justify=space-between>
               <el-col :span="10" >
                 <div class="title">所在城市</div>
                 <el-form-item >
                     <el-cascader
                       expand-trigger="hover"
                       :options="cityData"
                       v-model="form.city"
                       @change="handleChange" style="width: 100%">
                     </el-cascader>
                 </el-form-item>
               </el-col>
               <el-col :span="10">
                 <div class="title">详细地址</div>
                 <el-form-item >
                   <el-input v-model="form.address" placeholder="详细地址"></el-input>
                 </el-form-item>
               </el-col>
             </el-row>
             <el-row  type="flex" justify=space-between>
               <el-col :span="10" >
                 <div class="title">公司邮箱</div>
                 <el-form-item >
                   <el-input v-model="form.email" placeholder="公司邮箱" :disabled="true"></el-input>
                 </el-form-item>
               </el-col>
               <el-col :span="10">
                 <div class="title">公司官网</div>
                 <el-form-item >
                   <el-input v-model="form.net" placeholder="公司官网"></el-input>
                 </el-form-item>
               </el-col>
             </el-row>
             <el-row  type="flex" justify="space-between">
               <el-col :span="10" >
                 <div class="title">公司高管</div>
                 <el-select v-model="form.ceo" placeholder="请选择" style="width: 100%">
                   <el-option
                     v-for="item in ceoData"
                     :key="item._id"
                     :label="item.name"
                     :value="item._id">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col :span="10">
                 <div class="title">公司类型</div>
                 <el-select v-model="form.type" placeholder="请选择" style="width: 100%">
                   <el-option
                     v-for="item in typeData"
                     :key="item.value"
                     :label="item.name"
                     :value="item.name">
                   </el-option>
                 </el-select>
               </el-col>
             </el-row>
             <el-row  type="flex" justify="end" style="margin-top:20px">
               <el-col :span="4" >
                 <el-button>取消</el-button>
                 <el-button @click="splitterComplete(0)">完成</el-button>
               </el-col>
             </el-row>
           </el-form>
         </div>
       </div>
       <!--公司描述区-->
       <div class="company-desc">
         <div style="display: flex;justify-content: space-between;align-items: center">
           <div class="cip-header">公司简介</div>
           <div class="editorBtn" @click="splitterEdit(1)">编辑</div>
         </div>
         <div class="company-desc-show" v-show="!isIntroduce" v-html="form.introduce">
         </div>
         <div class="company-desc-editor" v-show="isIntroduce">
           <h4>编辑企业简介</h4>
           <quill-editor
             v-model="form.introduce"
             :options="editorOption"
             ref="myQuillEditor3"
           >
           </quill-editor>
           <el-row  type="flex" justify="end" style="margin-top:20px">
             <el-col :span="4" >
               <el-button>取消</el-button>
               <el-button @click="splitterComplete(1)">完成</el-button>
             </el-col>
           </el-row>
         </div>
       </div>
       <!--高管信息区-->
       <div class="boss-info-part" v-if="ceoDesc">
         <div style="display: flex;justify-content: space-between;align-items: center">
           <div class="cip-header">高管信息</div>
         </div>
         <div class="boss-info-part-show">
           <span>{{ceoName}}</span>
           <span>{{ceoPosition}}</span>
           <div>{{ceoDesc}}</div>
         </div>
       </div>
       <!--工商信息区-->
       <div class="business-info-part" >
         <div style="display: flex;justify-content: space-between;align-items: center">
           <div class="cip-header">工商信息</div>
           <div class="editorBtn" @click="splitterEdit(2)">编辑</div>
         </div>
         <div class="business-info-part-show" v-show="!isBusiness">
           <span>法人代表：{{form2.legalPerson}}</span>
           <span>注册资金：{{form2.registerMoney}}</span>
           <span>注册时间：{{form2.registerTime}}</span>
           <span>开业状态：{{form2.openingState}}</span>
         </div>
         <div class="business-info-part-editor" v-show="isBusiness">
           <h4>编辑工商信息</h4>
           <div class="bipe-main">
             <el-form ref="form2" :model="form2">
               <el-row type="flex" justify=space-between>
                 <el-col :span="10" >
                   <div class="title">法人代表</div>
                   <el-form-item >
                     <el-input v-model="form2.legalPerson" placeholder="法人代表"></el-input>
                   </el-form-item>
                 </el-col>
                 <el-col :span="10" >
                   <div class="title">注册资金</div>
                   <el-form-item >
                     <el-input v-model="form2.registerMoney" placeholder="注册资金"></el-input>
                   </el-form-item>
                 </el-col>
               </el-row>
               <el-row type="flex" justify=space-between>
                 <el-col :span="10" >
                   <div class="title">注册时间</div>
                   <el-form-item >
                     <el-input v-model="form2.registerTime" placeholder="如：2015-04-05"></el-input>
                   </el-form-item>
                 </el-col>
                 <el-col :span="10" >
                   <div class="title">注册类型</div>
                   <el-form-item >
                     <el-input v-model="form2.registerType" placeholder="注册类型"></el-input>
                   </el-form-item>
                 </el-col>
               </el-row>
               <el-row  type="flex" justify=space-between>
                 <el-col :span="10">
                   <div class="title">开业状态</div>
                   <el-form-item >
                     <el-input v-model="form2.openingState" placeholder="注册类型"></el-input>
                   </el-form-item>
                 </el-col>
               </el-row>
               <el-row type="flex" justify="end" style="margin-top:20px">
                 <el-col :span="4" >
                   <el-button>取消</el-button>
                   <el-button @click="splitterComplete(2)">完成</el-button>
                 </el-col>
               </el-row>
             </el-form>
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
        name: "component-info-supplement",
        data(){
          return{
            form:{
              name:"公司名",
              industry:"所属行业",
              financing:"融资状态",
              scale:"公司规模",
              address:"公司地址",
              net:"公司官网",
              city:[],
              type:"公司类型",
              email:this.$store.state.userInfo.email,
              introduce:"请这个地方填写公司简介！",
              ceo:"",
              business:"",
            },
            form2:{
              legalPerson:"",
              registerMoney:"",
              registerTime:"",
              openingState:"",
              registerType:""
            },
            ceoName:"",
            ceoPosition:"",
            ceoDesc:"",
            isShow:false,
            isIntroduce:false,
            isBusiness:false,
            industryData:[],   //行业数据
            ceoData:[],      //高管数据
            typeData:[{name:"新锐公司",value:"1"},{name:"上市公司",value:"2"},{name:"行业巨头",value:"3"}],
            ScaleData:[{name:"不限",value:""},{name:"0-20人",value:"0"},{name:"20-99人",value:"1"},{name:"100-499人",value:"2"},{name:"500-999人",value:"3"},{name:"10000人以上",value:"4"}],
            fancingData:[{name:"不限",value:""},{name:"未融资",value:"0"},{name:"天使轮",value:"1"},{name:"A轮",value:"2"},{name:"B轮",value:"3"},{name:"C轮",value:"4"},{name:"D轮",value:"5"},{name:"已上市",value:"6"},{name:"不需要融资",value:"7"}],
            cityData:[
              {value:"北京",label:"北京"},
              {value:"天津",label:"天津"},
              {value:"河南",label:"河南",children:[{value:"郑州",label:"郑州"},{value:"洛阳",label:"洛阳"}]}
            ],
            editorOption: {
               //placeholder:`请按照有序的条例将自己的优势罗列出来`,
              modules: {
                toolbar: [
                  [{'list':'bullet'},{'list':'ordered'}],
                  ['bold','italic','underline','strike'],
                  [{'header':[1,2,3,4,5,6]}]
                ]
              }
            },
          }
        },
      components:{
        quillEditor,
      },
      methods:{
          /**
           * 获取行业的信息
           */
          getIndustryListData()
          {
            this.$axios.get("industry/list").then(res=>{
              if(res.code==200)
              {
                this.industryData=res.data;
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败，请检查网络连接")
            })
          },
          /***
           * 获取高管数据
           */
          getCeoData()
          {
            this.$axios.get("excue/").then(res=>{
              if(res.code==200)
              {
                 this.ceoData=res.data;
                 this.getCompanyData();
              }else{
                this.$message.info(res.msg);
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("获取数据失败，请检查网络连接");

            })
          },
          handleChange()
          {

          },
          /**
           * 完成按钮分离器函数
           */
          splitterComplete(index)
          {
            switch (index)
            {
              case 0:
                this.isShow=false;
                this.SaveCompanyInfo();
                break;
              case 1:
                this.isIntroduce=false;
                this.SaveCompanyInfo();
                break;
              case 2:
                if(this.form2.legalPerson&&this.form2.registerMoney&&this.form2.registerTime&&this.form2.openingState&&this.form2.registerType)
                {

                  this.SaveCompanyInfo();
                  this.isBusiness=false;
                }else{
                  this.$message.info("请填写完整的信息！");
                }
                break
            }
          },
          /***
           * 编辑按钮分流器
           */
          splitterEdit(index)
          {
            switch (index)
            {
              case 0:
                this.isShow=true;
                break;
              case 1 :
                this.isIntroduce=true;
                break;
              case 2 :
                this.isBusiness=true;
                break
            }
          },
          /***
           * 保存公司的信息
           */
          SaveCompanyInfo()
          {
            let params={...this.form};
            if(params.industry && params.industry !="所属行业")
            {
              for(let i=0;i< this.industryData.length;i++)
              {
                if(this.industryData[i].name==params.industry)
                {
                  params.industry=this.industryData[i]._id;
                  break;
                }
              }
            }
            if(params.financing && params.financing != "融资状态")
            {
              for(let i=0;i<this.fancingData.length;i++)
                if(this.fancingData[i].name==params.financing)
                {
                  params.financing=this.fancingData[i].value;
                  break;
                }
            }
            if(params.scale && params.scale !="公司规模")
            {
              for(let i=0;i<this.ScaleData.length;i++)
              {
                if(this.ScaleData[i].name==params.scale)
                {
                  params.scale=this.ScaleData[i].value;
                }
              }
            }
            if(params.type && params.type != "公司类型")
            {
              for(let i=0;i<this.typeData.length;i++)
              {
                if(this.typeData[i].name==params.type)
                {
                  params.type=this.typeData[i].value;
                  break;
                }
              }
            }
           // console.log("city",params);
            if(params.city)
            {
               params.city=params.city[0];
            }
            //console.log("ggggggg",this.form2.legalPerson&&this.form2.registerTime&&this.form2.registerMoney&&this.form2.openingState&&this.form2.registerType);
            if(this.form2.legalPerson&&this.form2.registerTime&&this.form2.registerMoney&&this.form2.openingState&&this.form2.registerType)
            {
              params.business=this.form2.legalPerson+"，"+this.form2.registerMoney+"，"+this.form2.registerTime+"，"+this.form2.registerType+"，"+this.form2.openingState;
              //console.log("执行了",params);
            }
            this.$axios.post("/company/add",params).then(res=>{
              console.log("res",res)
              if(res.code==200)
              {
                 this.$message.success(res.msg);
              }else{
                this.$message.info(res.msg);
              }
            }).catch(err=>{
              console.log(err);
              this.$message.error("数据获取失败，网络连接出现异常！")
            })

          },
        /***
         * 获取公司的信息
         */
          getCompanyData()
         {
           this.$axios.get("company/select/email",{email:this.$store.state.userInfo.email}).then(res=>{
             if(res.code==200)
             {
               if(res.data.length>0) {
                 let data = res.data[0];
                 if (data.industry && data.industry != "所属行业") {
                   this.industryData.forEach(item => {
                     if (item._id == data.industry) {
                       data.industry = item.name;
                     }
                   })
                 }
                 if (data.financing && data.financing != "融资状态") {
                   this.fancingData.forEach(item => {
                     if (item.value == data.financing) {
                       data.financing = item.name;
                     }
                   })
                 }
                 if (data.scale && data.scale != "公司规模") {
                   this.ScaleData.forEach(item => {
                     if (item.value == data.scale) {
                       data.scale = item.name;
                     }
                   })
                 }
                 if (data.type && data.type != "公司类型")
                 {
                   this.typeData.forEach(item=>{
                     if(item.value == data.type)
                     {
                       data.type=item.name;
                     }
                   })
                 }
                 if(data.city.length >0 )
                 {
                   data.city=data.city.split(",");
                 }
                 if(data.ceo)
                 {
                    this.ceoName=data.ceo.name;
                    this.ceoPosition=data.ceo.position;
                    this.ceoDesc=data.ceo.desc;
                 }
                 if(data.business)
                 {
                   let ArrayBusiness=data.business.split("，");
                   this.form2.legalPerson=ArrayBusiness[0];
                   this.form2.registerMoney=ArrayBusiness[1];
                   this.form2.registerTime=ArrayBusiness[2];
                   this.form2.registerType=ArrayBusiness[3];
                   this.form2.openingState=ArrayBusiness[4];
                 }
                 this.form = { ...data};
                 this.form.ceo=data.ceo._id;
               }
             }
           }).catch(err=>{
             console.log(err);
            this.$message.error("拉去数据失败，请检查网络连接！")
           })
         }
      },
      watch:{
          "form.ceo":function(newValue,oldValue)
          {
            this.ceoData.forEach(item=>{
              console.log(item._id,"newValue",newValue)
              if(item._id==newValue)
              {
                this.ceoName=item.name;
                this.ceoPosition=item.position;
                this.ceoDesc=item.desc;
              }
            })
          }
       },
       created()
       {
         this.getIndustryListData();
         this.getCeoData();
       }
    }
</script>

<style scoped lang="scss">
  .company-info-supplement-container
  {
    width: 1000px ;
    margin:15px auto;
    padding:15px 30px;
    box-sizing: border-box;
    background-color: #fff;
    .company-info-part,.boss-info-part,.company-desc,.business-info-part
    {
      .cip-header
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
      .company-info-show
      {
        display: flex;
        justify-content: space-between;
        margin:15px 0;
        .cis-left
        {
          font-size: 14px;
          color: #414A60;
          div {
            span {
              padding: 0 15px;
            }
            span:nth-of-type(1), span:nth-of-type(2) {
              border-right: 1px solid #e0e0e0;
            }
          }
          div:nth-of-type(2), div:nth-of-type(3) {
            margin-top: 15px;
          }
          .cisl-bottom
          {
            span:nth-of-type(2)
            {
              border-right: none;
            }
          }
        }
        .cis-right
        {
           display: flex;
           flex-direction: column;
           align-items: center;
           margin-right: 20px;
           .company-avatar
           {
             width: 80px;
             height:80px;
             border-radius: 5px;
             background-color: transparent;
           }

        }
      }
      .company-info-part-editor,company-desc-editor,.boss-info-part-editor,.business-info-part-editor
      {
        margin:10px 0 20px;
        .title
        {
          font-size: 14px;
          padding:3px 0px 8px;
          color:#414A60;
        }
        h4{
          margin-top:8px;
          color:#24272E;
        }
      }
    }
    .company-desc
    {
       margin-bottom:15px;
       .company-desc-show
       {
         padding:15px;
         margin-top:4px;
         text-indent: 2em;
         font-size: 14px;
         color:#414A60;
         min-height:80px;
         border-radius: 5px;
         &:hover{
           background: #eee;
         }
       }
    }
    .boss-info-part
    {

      .boss-info-part-show
      {
        margin-top:5px;
        padding:15px;
        font-size: 14px;
        color:#414A60;
        min-height:80px;
        border-radius: 5px;
        span{
          display: inline-block;
          padding:0 10px;
        }
        span:nth-of-type(1)
        {
          text-indent:-0.6em;
          border-right: 1px solid #e0e0e0;
        }
        div{
          margin-top:10px;
        }
        &:hover{
          background-color: #eee;
        }
      }
    }
    .business-info-part
    {
       margin-top:15px;
      .business-info-part-show
      {
        padding:15px;
        margin-top:4px;
       // border: 1px solid red;
        font-size: 14px;
        color:#414A60;
        span{
          padding:0 25px;
          border-right: 1px solid #e0e0e0;
        }
        span:nth-of-type(1)
        {
          padding:0 25px 0 0;
        }
        span:last-of-type
        {
          border:none;
        }
      }
      .business-info-part-editor
      {
       // border: 1px solid green;
        marging-top:15px;
        .bipe-main
        {
         // border: 1px solid #000;
        }

      }

    }

    .editorBtn
    {
      margin-right:25px;
      font-size: 14px;
      color:#00C2B3;
      margin-top:10px;
    }

     /**注意使用深度选择器*/
    /deep/
    .ql-container
    {
      min-height:100px;
      max-height: 300px;
    }
  }


</style>
