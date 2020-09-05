import Api from '@/apis'

const routes = {
  namespaced: true,
  state: {
    lists: []
  },
  mutations: {
    getRoutes: (state, options) => {
      Api.fetchRoutes(options).then(res=>{
        state.lists = res.data.data
      })
    }
  },
  actions: {
    fetchRoutes: context => {
      context.commit('getRoutes')
    }
  }
}

export default routes