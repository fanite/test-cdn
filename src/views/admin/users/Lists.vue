<template>
  <div style="width: 100%; height:100%;background-color: #fff">
    <ul id="example-1" style="margin: 0">
      <li v-for="item in items" :key="item.id">
        {{ item.email }}-{{item.username}}-{{item.key}}
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      items: []
    }
  },
  mounted: function () {
    const self = this
    Axios.get('/admin/users').then(function (respone) {
      self.items = respone.data.data
      console.log(respone.data)
    })
  }
}
</script>
