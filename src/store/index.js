import { createStore } from 'vuex'
import trendings from './modules/trendings'
import starred from './modules/starred'
import auth from './modules/auth'
import repos from './modules/repos'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trendings.data.filter((trendingsRepo) => {
        return !state.starred.data.some((starredRepo) => {
          return trendingsRepo.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    trendings,
    starred,
    auth,
    repos
  }
})
