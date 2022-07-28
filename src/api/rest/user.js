import { makeRequests } from '../requests'

export const getUserData = () => makeRequests({
  url: '/user'
})

export const getUserRepos = () => makeRequests({
  url: '/user/repos'
})
