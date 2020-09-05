import Api from '@/apis'
import { Promise } from 'q';
import { Message } from 'element-ui';
import Lockr from '@/plugins/lockr'

let ACCESS_TOKEN = Lockr.autodev.ACCESS_TOKEN,
    REFRESH_TOKEN = Lockr.autodev.REFRESH_TOKEN,
    EXPIRES_IN = Lockr.autodev.EXPIRES_IN,
    TOKEN_TYPE = Lockr.autodev.TOKEN_TYPE,
    USER_INFO = Lockr.autodev.USER_INFO;

const auth = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    userInfo: {}
  },
  mutations: {
    saveNewToken: (state, payload) => {
      if (payload.status == 200) {
        let data = payload.data
        Lockr.set(ACCESS_TOKEN, data[ACCESS_TOKEN])
        Lockr.set(REFRESH_TOKEN, data[REFRESH_TOKEN])
        Lockr.set(EXPIRES_IN, data[EXPIRES_IN] + Date.now())
        Lockr.set(TOKEN_TYPE, data[TOKEN_TYPE])
      }
    },
    saveUserInfo: (state, payload) => {
      Lockr.set(USER_INFO, payload)
      state.userInfo = payload
    },
    isLoggedIn: (state, loginStatus) => {
      state.isLoggedIn = loginStatus
    },
    checkLocalToken: () => {},
    tokenIsExpired: () => {},
    refreshLocalToken: () => {},
    removeLocalToken: () => {
      Lockr.rm(ACCESS_TOKEN)
      Lockr.rm(REFRESH_TOKEN)
      Lockr.rm(EXPIRES_IN)
      Lockr.rm(TOKEN_TYPE)
      Lockr.rm(USER_INFO)
    }
  },
  actions: {
    handleRequestNewToken ({ dispatch, commit }, data) {
      return new Promise((resolve, reject) => {
        Api.auth.login(data).then(async respone => {
          await commit('saveNewToken', respone)
          commit('isLoggedIn', true)
          dispatch('handleGetUserInfo')
          resolve(respone)
        }).catch(error => {
          reject(error)
        })
      })
    },
    async handleGetUserInfo({ commit }) {
      let res = await Api.admin.user.getCurrentUserInfo()
      commit('saveUserInfo', res.data.data)
    },
    handleRevokeToken () {
      Api.auth.logout().then(() => {
        Message.success({
          message: '退出成功！'
        })
      })
    },
    handleLogout ({ commit, dispatch }) {
      commit('isLoggedIn', false)
      commit('removeLocalToken')
      dispatch('handleRevokeToken')
    }
  }
}

export default auth