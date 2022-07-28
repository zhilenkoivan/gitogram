import { createStore } from 'vuex'
import trendings from './modules/trendings'
import starred from './modules/starred'
import auth from './modules/auth'
import user from './modules/user'
import repos from './modules/repos'

export default createStore({
  modules: {
    trendings,
    starred,
    auth,
    user,
    repos
  }
})
