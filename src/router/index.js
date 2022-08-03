import { createRouter, createWebHistory } from 'vue-router'
import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { following } from '../pages/following'
import { repos } from '../pages/repos'
import { userPage } from '../pages/userPage'
// import * as api from '../api'
import store from '../store'

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: auth
  },
  {
    path: '/',
    name: 'feeds',
    component: feeds
  },
  {
    path: '/stories',
    name: 'stories',
    component: stories
  },
  {
    path: '/userPage',
    name: 'userPage',
    component: userPage,
    children: [{
      path: '',
      component: repos,
      name: 'repos',
      props: {
        pageTitle: 'Repositories'
      }
    }, {
      path: 'following',
      component: following,
      name: 'following',
      props: {
        pageTitle: 'Following'
      }
    }]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  let isLogged = store.getters['auth/isLogged']

  if (!isLogged && localStorage.getItem('token')) {
    await store.dispatch('auth/getUser')
    isLogged = store.getters['auth/isLogged']
  }

  if (!isLogged && !to.name === 'auth') {
    next({ name: 'auth' })
  } else if (isLogged && to.name === 'auth') {
    next({ name: 'feeds' })
  } else {
    next()
  }
})

export default router
