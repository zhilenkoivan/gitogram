export default {
  namespaced: true,
  state: {
    trendings: {
      data: {},
      loading: false,
      error: ''
    }
  },
  getters: {
  },
  mutations: {
    setTrendingsData (state, payload) {
      state.trendings.data = payload
    },
    setTrendingsLoading (state, payload) {
      state.trendings.loading = payload
    },
    setTrendingsError (state, payload) {
      state.trendings.error = payload
    }
  },
  actions: {
    async fetchTrendings ({ commit }) {
      commit('setTrendingsLoading', true)
      try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        console.log(data)
        commit('setTrendingsData', data.results[0])
      } catch (error) {
        commit('setTrendingsError', 'error')
      } finally {
        commit('setTrendingsLoading', false)
      }
    }
  }
}
