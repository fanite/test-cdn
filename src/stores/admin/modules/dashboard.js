import Cookies from 'js-cookie'
const isCollapsedCache = Cookies.get('isCollapsed')
const store = {
  namespaced: true,
  state: {
    isCollapsed: isCollapsedCache === undefined ? false : JSON.parse(isCollapsedCache)
  },
  mutations: {
    handleCollapse: state => {
      state.isCollapsed = !state.isCollapsed
      Cookies.set('isCollapsed', state.isCollapsed)
    }
  },
  actions: {
    handleCollapse: context => {
      context.commit('handleCollapse')
    }
  }
}

export default store