import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from './apps/admin'
import {lazyLoadVue as lazyLoad} from '@/libs/utils'
import Utils from '@/libs/utils'

Vue.use(VueRouter);

const sRouter = [
  {
    name: 'Index',
    path: '/index',
    alias: '/',
    component: lazyLoad('views/home/Index.vue')
  },
  {
    name: 'Login',
    path: '/login',
    component: lazyLoad('views/pages/Login.vue')
  },
  {
    name: 'NotFound',
    path: '*',
    component: lazyLoad('views/pages/NotFound.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes: [...Admin, ...sRouter]
})

router.beforeEach((to, from, next) => {
  Utils.isLoggedIn()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!Utils.isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router