<template>
  <el-breadcrumb separator="/" class="admin-breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }"><i class="fa fa-home fa-fw"></i> 首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style scoped>
.admin-breadcrumb {
  line-height: 60px;
  margin-left: 15px;
}
</style>
