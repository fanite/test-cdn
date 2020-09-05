import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import admin from './admin'
import common from './common'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    admin,
    common
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store