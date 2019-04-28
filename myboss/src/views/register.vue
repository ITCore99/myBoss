<template>
    <div class="register-container">
      <div :class="switcher ? 'register-part-wrapper goHidden':'register-part-wrapper'">
        <div class="register-part" >
          <div class="register-title" >
            立即注册&nbsp;&nbsp;科大直聘
          </div>
          <div class="tabar-trigger">
            <div :class="userType == 0 ? 'active' : '' " @click="changeUserType(0)">我要求职</div>
            <div :class="userType == 1 ? 'active' : '' " @click="changeUserType(1)">我要招聘</div>
          </div>
          <div class="formBox">
            <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
              <el-form-item label="" prop="username" >
                <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="" prop="phone" v-show="userType==0 ">
                <el-input v-model="ruleForm.phone"   placeholder="请输入电话" ></el-input>
              </el-form-item>
              <el-form-item label="" prop="email" v-show="userType==1">
                <el-input v-model="ruleForm.email"   placeholder="请输入公司邮箱"></el-input>
              </el-form-item>
              <el-form-item label="" prop="password">
                <el-input v-model="ruleForm.password"  type="password" placeholder="请输入密码"  autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
              </el-form-item>
            </el-form>
            <div class="goLogin">
               <p>已有账号 <span @click="switcherHandler">去登陆</span></p>
            </div>
          </div>
        </div>
      </div>
      <div :class="switcher ? 'login-part-wrapper' : 'login-part-wrapper loginHidden'">
          <div class="login-header">
            <span>欢迎登陆科大直聘</span>
            <span @click="switcherHandler">X</span>
          </div>
          <div class="tabar-trigger">
            <div :class="userType == 0 ? 'active' : '' "  @click="changeUserType(0)">我要求职</div>
            <div :class="userType == 1 ? 'active' : '' "  @click="changeUserType(1)">我要招聘</div>
          </div>
          <div class="login-formBox">
            <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
              <el-form-item label="" prop="username" style="margin-top:10px;" >
                <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="" prop="password" style="margin-top:40px;">
                <el-input v-model="ruleForm.password"  type="password" placeholder="请输入密码"  autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
              </el-form-item>
            </el-form>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
          var checkUsername=(rule,value,callback)=>{
              console.log("value",value);
              if(!value)
              {
                return callback(new Error('用户名不能为空'))
              }else{
                callback();
              }
          }
          var checkPhone=(rule,value,callback)=>{
            if(!value)
            {
               return callback(new Error('手机号不能为空'));
            }else{
              let reg=/^1[3|4|5|7|8][0-9]{9}$/;
              if(!reg.test(value))
              {
                 callback(new Error('请输入正确的手机号'))
              }else{
                callback();
              }
            }
          }
          var checkPassword=(rule,value,callback)=>{
            if(!value)
            {
              return callback(new Error('密码不能为空'))
            }else{
              callback();
            }
          }
          var checkEmail=(rule,value,callback)=>{
            if(!value)
            {
              return callback(new Error('邮箱不能为空'))
            }else{
              let  reg=/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
              if(!reg.test(value))
              {
                 return callback(new Error('邮箱的格式错误'))
              }else{
                callback();
              }
            }
          }
          return{
            ruleForm: {
              username:"",
              phone:"",
              password:"",
              email:""
            },
            switcher:false,
            userType:0, //默认 是0 0表示求职者  1表示招聘者
            rules:{
              username:[ {validator:checkUsername,trigger:'blur'} ],
              phone:[ {validator:checkPhone,trigger:'blur'} ],
              password:[ {validator:checkPassword,trigger:'blur'}],
              email:[{validator:checkEmail,trigger:'blur'}]
            }
          }
        },
       methods:{
         submitForm(formName)
         {
           console.log("点开来")
           this.$refs[formName].validate((valid=>{
             if(valid)
             {
               if(!this.switcher)
               {
                 this.goRegister();
               }else{
                 this.goLogin()
               }
             }else{
               this.$message.info("请填写完信息！")
               return false;
             }
           }))
         },
         switcherHandler()
         {
           console.log("执行了")
           this.switcher=!this.switcher;
         },
         goLogin()
         {
           let data={username:this.ruleForm.username,password:this.ruleForm.password,type:this.userType}
           this.$axios.post("/login",data).then(res=>{
             if(res.code==200)
             {
               if(res.msg=="用户未注册")
               {
                 this.$message.info(res.msg);
                 setTimeout(()=>{
                   this.switcherHandler();
                 },500)

               }else{
                 this.$message.success(res.msg);
                 this.$store.commit('INTUSERINFO',res.data);
                 this.$router.push("/home");
               }
             }else{
               this.$message.info(res.msg);
             }
           })
         },
         goRegister()
         {
           this.ruleForm.type=this.userType;
           this.$axios.post("/reg",this.ruleForm).then(res=>{
             if(res.code==200)
             {
               this.$message.success(res.msg);
               setTimeout(()=>{
                 this.switcherHandler();
               },500)
             }else{
               this.$message.info("注册失败！")
             }
           })
         },
         changeUserType(type)
         {
           this.userType=type;
         }
       }
    }
</script>

<style lang="scss">
   .register-container
   {
     position: relative;
     width:100%;
     overflow: hidden;
     height: calc(100vh - 60px);
     background-image: -webkit-linear-gradient(top,#3e72d2 0,#77bdd1 100%);
     //注册部分
     .register-part-wrapper
     {
       position: absolute;
       display: flex;
       top:50%;
       left:50%;
       transform: translate(-50%,-50%);
       border-radius: 5px;
       overflow: hidden;
       transition: all 0.5s ease;
       .register-part
       {
         width:500px;
         height:480px;
         padding:30px 35px 10px;
         box-sizing: border-box;
         background: #fafafa;

         .register-title
         {
           margin-top:10px;
           font-size: 26px;
           text-align: center;
           color:#5DD5C8;
         }

         .formBox
         {
           padding-top:20px;
           .el-button
           {
             width: 100%;
             height:50px;
             font-size: 16px;
             background:#53cac3;
             border:1px solid #53cac3;
             outline: none;
             margin:0 auto;
             &:hover{
               outline: none;
               background: #5DD5C8;
             }
           }
         }
         .goLogin
         {
           font-size: 16px;
           color:#9fA3B0;
           text-align: center;
           span
           {
             color:#18C3B1;
           }
         }
       }
       &.goHidden{
         left:-20%;
       }
     }
     //登陆部分
     .login-part-wrapper
     {
       position: absolute;
       top:50%;
       left:50%;
       transform:translate(-50%,-50%);
       width:500px;
       height:450px;
       padding:15px 35px 10px;
       box-sizing: border-box;
       background: #fff;
       border-radius: 6px;
       transition: all 0.5s ease 0.1s;
       border:1px solid #aaa;
       .login-header
       {
         display: flex;
         justify-content: space-between;
         height: 45px;
         font-size: 20px;
         line-height: 45px;
         color:#5DD5C8;
         span:nth-of-type(2)
         {
           margin-right: 15px;
           font-size: 20px;
           color:#eee;
           &:hover{
             color:#5DD5C8;
           }
         }
       }
       .login-formBox
       {
         padding:15px 0px 10px;
         box-sizing: border-box;
         .el-button
         {
           width: 100%;
           height:50px;
           font-size: 16px;
           background:#53cac3;
           border:1px solid #53cac3;
           outline: none;
           margin:40px auto;
           &:hover{
             outline: none;
             background: #5DD5C8;
           }
         }
       }
       &.loginHidden
       {
         left:120%;
       }
     }
     .el-input.is-active .el-input__inner, .el-input__inner:focus
     {
       border-color:#53cac3 ;
     }
     .tabar-trigger
     {
       display: flex;
       margin-top:15px;
       font-size: 16px;
       color:#595757;
       justify-content: space-between;
       div{
         width: 50%;
         padding:8px 0px 8px;
         text-align: center;
       }
       div.active
       {
         border-bottom: 2px solid #5DD5C8;
         color:#5DD5C8
       }
     }
   }
</style>
