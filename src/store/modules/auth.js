import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    getAuthCode () {
      api.auth.sendUserToAuthPage()
    },
    async authUserByCode (store, code) {
      const { data } = await api.auth.getAccessTokenByPersonalCode(code)
      return data.token
    },
    async getUser (context) {
      try {
        const { data } = await api.user.getUserData()
        context.commit('SET_USER', data)
      } catch (error) {
        localStorage.removeItem('token')
        console.log(error)
      }
    },
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  },
  getters: {
    isLogged (state) {
      return state.user !== null
    }
  }
}
