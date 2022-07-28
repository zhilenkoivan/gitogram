import * as api from '../../api'

export default {
  namespaced: true,
  state: {},
  actions: {
    getAuthCode () {
      api.auth.sendUserToAuthPage()
    },

    async authUserByCode (store, code) {
      const { data } = await api.auth.getAccessTokenByPersonalCode(code)
      return data.token
    },

    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
