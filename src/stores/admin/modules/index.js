const store = {
  namespaced: true,
  state: {
    dialogLoginFormVisible: false
  },
  mutations: {
    toggleVisibleStatus: (state, status) => {
      state.dialogLoginFormVisible = status
    }
  },
  actions: {
    handleToggleVisibleStatus: ({commit}, status) => {
      commit('toggleVisibleStatus', status)
    }
  }
}

export default store