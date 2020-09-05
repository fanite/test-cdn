<template>
  <el-menu
    :default-active="this.$route.path"
    :collapse="isCollapsed"
    router
    class="el-menu-vertical">
    <el-menu-item :index="this.$route.path" class="logo" @click="handleCollapse">
      <transition name="large-logo-transition" enter-active-class="animated bounce">
        <div class="large" v-show="!isCollapsed"><img src="@/assets/logo.png" alt=""></div>
      </transition>
      <transition name="large-logo-transition" enter-active-class="animated fadeInLeft">
        <div class="small" v-show="isCollapsed"><img src="@/assets/logo.png" alt=""></div>
      </transition>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="fa fa-fw fa-group"></i>
        <span>部门管理</span>
      </template>
      <el-submenu index="1-4">
        <template slot="title">用户</template>
        <el-menu-item index="/admin/users">列表</el-menu-item>
        <el-menu-item index="/admin/users/teams">分组</el-menu-item>
      </el-submenu>
      <el-menu-item index="1-6-1">事业部</el-menu-item>
      <el-submenu index="1-5">
        <template slot="title">其他</template>
        <el-menu-item index="1-5-1">地区</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="fa fa-fw fa-group"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item :index="this.$route.path" class="collapse" @click="handleCollapse">
      <i class="el-icon-more-outline"></i>
      <span slot="title">{{collapseText}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleCollapse () {
      this.$store.dispatch('admin/dashboard/handleCollapse')
    }
  },
  computed: {
    isCollapsed: function () {
      return this.$store.state.admin.dashboard.isCollapsed
    },
    collapseText: function () {
      return this.isCollapsed ? '展开' : '折叠'
    }
  }
}
</script>

<style scoped>
.logo {
  height: 60px;
  box-sizing: border-box;
  border-bottom: solid 1px #e6e6e6;
  display: -webkit-flex;
  display: -ms-flexbox;;
  display: flex;
  justify-content: center;
}
.logo .large, .logo .small, .logo img {
  height: 56px;
}
.logo .large, .large img {
  width: 186px;
}
.logo .small,  .small img {
  width: 56px;
}
.el-menu-vertical {
  border-right: unset !important;
}
.el-menu-vertical .collapse {
  position: fixed;
  bottom: 0;
  width: 64px;
}
.el-menu-vertical .collapse {
  background-color: unset;
  color: #909399;
}
.el-menu-vertical:not(.el-menu--collapse),
.el-menu-vertical:not(.el-menu--collapse) .collapse {
    width: 200px;
}
.el-menu-item [class^="fa fa-fw fa-"], .el-submenu [class^="fa fa-fw fa-"] {
  margin-right: 5px !important;
  vertical-align: middle;
}
</style>
