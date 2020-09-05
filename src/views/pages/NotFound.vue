<template>
  <div>
    <div id="test-loading"></div>
    <el-input  placeholder="请输入密码" v-model="input11" show-password></el-input>
  </div>
</template>
<script>
import { Loading } from 'element-ui';
export default {
  data() {
    return {
      input11: ''
    }
  },
  mounted: function () {
    Loading.service({
      target: '#test-loading',
      spinner: 'my-loading'
    });
  }
}
</script>