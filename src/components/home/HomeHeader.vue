<template>
  <div id="header">
    <a href="" id="logo">中国之家</a>
    <home-menu />
  </div>
</template>
<script>
import {lazyLoadVue} from '@/libs/utils'
export default {
  components: {
    HomeMenu: lazyLoadVue('components/home/HomeMenu.vue')
  }
}
</script>

<style scoped>
#header {
  color: #f2f2f2;
  position: fixed;
  z-index: 9999;
  width: 100%;
}
#logo {
  font-weight: 700;
  font-size: 1.9em;
  text-decoration: none;
  color: #f2f2f2;
  margin: 40px;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  position: absolute;
}
</style>
