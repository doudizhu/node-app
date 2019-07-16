<template lang="pug">
  .login
    .form_container
      .manage_tip
        .title 米修在线管理后台系统
      el-form.ruleForm(:model='ruleForm', :rules='rules', ref='ruleForm', label-width='100px')
        el-form-item(label='邮箱', prop='email')
          el-input(v-model='ruleForm.email')
        el-form-item(label='密码', prop='password')
          el-input(v-model='ruleForm.password' type='password')
        el-form-item
          el-button.submit_btn(@click="submitForm('ruleForm')") 提交
        .tiparea  
          p
            | 还没有账号？现在
            router-link(to='/register') 注册
</template>

<script>
import jwt_decode from 'jwt-decode'

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
        email:'', // test@test.com
        password:'', // 123qwe
      },
      rules:{
        email:[
          {type:'email',required:true,message:'邮箱格式不正确',trigger:'blur'},
        ],
        password:[
          {required:true,message:'请输入',trigger:'blur'},
          {min:6,max:30,message:'长度在6到30个字符之间',trigger:'blur'},
        ],
      }
    }
  },
  methods:{
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post('/api/users/login', this.ruleForm)
            .then(res=>{
              // console.log(res)
              // token
              const {token} = res.data;
              // 存储到ls
              localStorage.setItem('eleToken', token)

              // 解析token
              const decode = jwt_decode(token)
              // console.log('decode:',decode)

              // token存储到vuex中
              this.$store.dispatch('setAuthenticated',!this.isEmpty(decode))
              this.$store.dispatch('setUser',decode)


              this.$router.push('/index')
            })
        }
      });
    },
    isEmpty(value){
      return (
        value === undefined
        || null
        || (typeof value === 'object' && Object.keys(value).length === 0)
        || (typeof value === 'string' && value.trim().length === 0)
      )
    }
  }
}
</script>

<style scoped>
.login {
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
  top: 20%;
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
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
