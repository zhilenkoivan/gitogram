import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_TRENDINGS (state, trendings) {
      state.data = trendings.map((item) => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_README (state, payload) {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
        }
        return repo
      })
    }
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((trendingsRepo) => trendingsRepo.id === id)
  },
  actions: {
    async fetchTrendings ({ commit }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', data.items)
      } catch (error) {
        console.log('error')
        throw error
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log('error')
        throw error
      }
    },
    async starRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })
      try {
        await api.starred.starRepoApi({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true
          }
        })
      } catch (error) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: 'Error has happened'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)

      commit('SET_FOLLOWING', {
        id,
        data: {
          status: true,
          loading: true,
          error: ''
        }
      })
      try {
        await api.starred.unStarRepoApi({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false
          }
        })
      } catch (error) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true,
            error: 'Error has happened'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
