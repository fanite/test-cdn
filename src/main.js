import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './routes';
import store from './stores';

// if (process.env.NODE_ENV === 'development') {
//   require('@/libs/mockjs')
// }

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
