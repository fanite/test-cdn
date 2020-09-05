<template>
  <el-form :model="loginform" :rules="rules" status-icon ref="loginform" class="loginform">
    <el-form-item prop="username">
      <el-input placeholder="请输入账号（工号）" v-model="loginform.username" required autocomplete="off">
        <template slot="prepend">账户</template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" placeholder="请输入密码" v-model="loginform.password" required show-password autocomplete="off">
        <template slot="prepend">密码</template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-switch 
        :style="{display: 'block', width: '110px'}"
        v-model="loginform.remember"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="记住登录">
      </el-switch>
    </el-form-item>
    <el-form-item class="submitbtn">
      <el-button type="primary" :loading="loading" plain @click="onSubmit('loginform')">立即登录</el-button>
    </el-form-item>
    <a href="" class="losspassword"><i class="fa fa-fw fa-hand-o-right"></i> 忘记密码</a>
  </el-form>
</template>
<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      loginform: {
        username: '',
        password: '',
        remember: false,
      },
      rules: {
        username: [{ required: true, message: '请输入账户（工号）', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false
    }
  },
  methods: {
    onSubmit(loginform) {
      this.$refs[loginform].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('common/auth/handleRequestNewToken', this.loginform).then(() => {
            this.$message({
              message: '登录成功！',
              type: 'success',
              onClose: function ()  {
                this.loading = false
                this.$store.dispatch('admin/index/handleToggleVisibleStatus', false)
                this.redirect()
              }.bind(this)
            })
          }).catch(error => {
            this.loading = false
            let message = error.response.data.message || error.message
            this.$message.error(message)
          })
        }
        return false
      })
    },
    redirect () {
      let query = this.$route.query
      let routeName = this.$route.name.toLowerCase()
      if (routeName === 'login') {
        this.$router.push('/')
      } else if (query.hasOwnProperty('redirect')) {
        this.$router.push(query.redirect)
      }
    }
  },
  mounted () {}
}
</script>

<style>
.loginform .el-form-item__error {
  margin-left: 68px;
}
.submitbtn {
  margin-bottom: 15px;
}
.submitbtn button {
  width: 100%
}
.losspassword {
  float: right;
  color: darkslategrey;
  text-decoration: none;
}
</style>

