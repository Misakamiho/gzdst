<template>
  <div class="login">
    <div class="container">
        <img src="../assets/avatar.jpg" class="avatar">
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
          prefix-icon="myicon myicon-user"
          clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          prefix-icon="myicon myicon-key"
          show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" class="login-btn"
          >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/users_api.js'
export default {
  data () {
    return {
      loginForm: {
        username: '123456',
        password: '5588'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 4,
            max: 16,
            message: '长度在 4 到 16 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 4,
            max: 16,
            message: '密码长度在 4 到 16 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          login(this.loginForm).then((result) => {
            if (result.data.code === '200') {
              this.$router.push({ name: 'home' })
            } else if (result.data.msg === '密码错误') {
              this.$message.error(`很抱歉， ${result.data.msg}`)
            } else {
              this.$message.error(`很抱歉， ${result.data.msg}`)
            }
          }).catch(() => {
            this.$message.error('很抱歉，服务器未开启')
          })
        } else {
          this.$message.error('账号密码错误请重新输入')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
