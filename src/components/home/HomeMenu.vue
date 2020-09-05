<template>
  <div id="menu">
    <ul>
      <li><a href="/home">首页</a></li>
      <li><a href="/auto">导航</a></li>
      <li><a href="/about">关于</a></li>
    </ul>
    <el-button class="login-button" v-if="!this.isLoggedIn" type="text" @click="handleOpenFormDialogVisibleStatus">登录</el-button>
    <el-popover
      v-else
      class="avatar"
      placement="top-start"
      width="80"
      popper-class="my-popper"
      trigger="hover">
      <ul class="popover-list">
        <li><a href="/auth/logout">我的报告</a></li>
        <li><a href="/auth/logout">配置</a></li>
        <li><a href="javascript:;" @click="handleLogout">退出</a></li>
      </ul>
      <img slot="reference" :src="'/static/img/'+this.userInfo.avatar" alt="" srcset="">
    </el-popover>
    <el-dialog title="登录" :visible="dialogLoginFormVisible" width="400px" :center="true" :before-close="handleCloseFormDialogVisibleStatus"><login-form /></el-dialog>
  </div>
</template>

<script>
import {lazyLoadVue} from '@/libs/utils'
export default {
  components: {
    LoginForm: lazyLoadVue('components/login/LoginForm.vue')
  },
  methods: {
    handleOpenFormDialogVisibleStatus () {
      this.$store.dispatch('admin/index/handleToggleVisibleStatus', true)
    },
    handleCloseFormDialogVisibleStatus () {
      this.$store.dispatch('admin/index/handleToggleVisibleStatus', false)
    },
    handleLogout () {
      this.$store.dispatch('common/auth/handleLogout')
    }
  },
  computed: {
    dialogLoginFormVisible () {
      return this.$store.state.admin.index.dialogLoginFormVisible
    },
    isLoggedIn () {
      return this.$store.state.common.auth.isLoggedIn
    },
    userInfo () {
      return this.$store.state.common.auth.userInfo
    }
  }
}
</script>

<style>
#menu {
  text-align: end;
  height: 60px;
  margin: 0 40px;
}
#menu ul {
  margin: 0;
  padding: 0;
  display: inline-block;
  /* font-size: 1.2em; */
}
#menu ul li {
  margin: 0 20px;
  display: inline-block;
}
#menu ul a {
  text-decoration: none;
  color: #f2f2f2;
  font-size: 16px;
  line-height: 60px;
}
.login-button {
  margin-left: 20px;
  color: #f2f2f2;
  font-size: 16px;
  display: inline-block;
}
.avatar {
  margin-left: 20px;
}
.avatar img {
  height: 32px;
  width: 32px;
  vertical-align: middle;
  cursor: pointer;
}
.my-popper {
  padding: 10px 0 !important;
  min-width: 60px !important;
}
.popover-list {
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
}
.popover-list li {
  list-style: none;
  line-height: 36px;
  margin: 0;
  cursor: pointer;
  outline: none;
  text-align: center;
}
.popover-list li a {
  font-size: 14px;
  text-decoration: none;
  color: #606266;
  display: block;
}
.popover-list li:hover a {
  background-color: #ecf5ff;
  color: #66b1ff;
}
</style>

