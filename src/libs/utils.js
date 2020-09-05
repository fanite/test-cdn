import store from '@/stores'
import Lockr from '@/plugins/lockr'

export function lazyLoadVue(path) {
  return () => import(/* webpackChunkName: "view-[index]" */ `@/${path}`)
}

const Utils = {
  storeLoginStatus: () => {
    return store.state.common.auth.isLoggedIn
  },
  localToken: () => {
    return Lockr.get(Lockr.autodev.ACCESS_TOKEN)
  },
  localUserInfo: () => {
    return Lockr.get(Lockr.autodev.USER_INFO)
  },
  tokenIsExpired: () => {
    let expiresIn = Lockr.get(Lockr.autodev.EXPIRES_IN)
    let now = Date.now()
    return (expiresIn - now - 86400) > 0
  },
  setLoggedInAndUserInfo: () => {
    store.commit('common/auth/saveUserInfo',
                  Utils.localUserInfo())
    store.commit('common/auth/isLoggedIn', true)
  },
  isLoggedIn: () => {
    if (Utils.storeLoginStatus()) {
      return true
    } else if(Utils.localToken()) {
      Utils.setLoggedInAndUserInfo()
      return true
    }
    return false
  }
}

export default Utils