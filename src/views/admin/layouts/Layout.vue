<template>
  <div id="admin">
    <div class="slidebar">
      <slide-bar/>
    </div>
    <div class="container">
      <div class="header">
        <admin-header/>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/third-icon/iconfont.css'
import {lazyLoadVue as lazyLoad} from '@/libs/utils'
export default {
  components: {
    AdminHeader: lazyLoad('views/admin/layouts/Header.vue'),
    SlideBar: lazyLoad('views/admin/layouts/SlideBar.vue')
  },
  computed: {
    isCollapsed: function () {
      return this.$store.state.admin.isCollapsed
    }
  }
}
</script>

<style scoped>
#admin {
  height: 100%;
  width: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;;
  display: flex;
}
.slidebar {
  border-right: solid 1px #e6e6e6;
}
.header {
  height: 60px;
  box-sizing: border-box;
  border-bottom: solid 1px #e6e6e6;
}
.container {
  flex: 1;
  display: -webkit-flex;
  display: -ms-flexbox;;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
  padding: 15px;
  box-sizing: border-box;
  background-color: aquamarine;
}
</style>
