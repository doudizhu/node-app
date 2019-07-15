<template lang="pug">
  .register
    .form_container
      .manage_tip
        .title 米修在线管理后台系统
      el-form.ruleForm(:model='ruleForm', :rules='rules', ref='ruleForm', label-width='100px')
        el-form-item(label='用户名', prop='name')
          el-input(v-model='ruleForm.name')
        el-form-item(label='邮箱', prop='email')
          el-input(v-model='ruleForm.email')
        el-form-item(label='密码', prop='password')
          el-input(v-model='ruleForm.password' type='password')
        el-form-item(label='确认密码', prop='password2')
          el-input(v-model='ruleForm.password2' type='password')
        el-form-item(label='选择身份')
          el-select(v-model='ruleForm.identity')
            el-option(label='管理员' value='manager')
            el-option(label='员工' value='employee')
        el-form-item
          el-button.submit_btn(@click="submitForm('ruleForm')") 提交
</template>

<script>
export default {
  data(){
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      ruleForm:{
        name:'',
        email:'',
        password:'',
        password2:'',
        identity:'',
      },
      rules:{
        name:[
          {required:true,message:'请输入',trigger:'blur'},
          {min:2,max:30,message:'长度在2到30个字符之间',trigger:'blur'},
        ],
        email:[
          {type:'email',required:true,message:'邮箱格式不正确',trigger:'blur'},
        ],
        password:[
          {required:true,message:'请输入',trigger:'blur'},
          {min:6,max:30,message:'长度在6到30个字符之间',trigger:'blur'},
        ],
        password2:[
          {required:true,message:'请输入',trigger:'blur'},
          {min:6,max:30,message:'长度在6到30个字符之间',trigger:'blur'},
          {
            validator:validatePass2,
            trigger:'blur',
          }
        ],
      }
    }
  },
  methods:{
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.ruleForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
</style>
