import { createRouter, createWebHistory } from 'vue-router'
import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { following } from '../pages/following'
import { repos } from '../pages/repos'
import { userPage } from '../pages/userPage'
import * as api from '../api'

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
  const authRoute = to.name === 'auth'

  try {
    await api.user.getUserData()
    next(authRoute ? { name: 'feeds' } : null)
  } catch (e) {
    next(authRoute ? null : { name: 'auth' })
  }
})

export default router
