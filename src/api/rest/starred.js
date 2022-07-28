import { makeRequests } from '../requests'

export const getStarredReposApi = ({ limit }) => {
  const params = new URLSearchParams()
  if (limit) {
    params.append('per_page', limit)
  }
  return makeRequests({
    url: `/user/starred?${params}`
  })
}

export const starRepoApi = ({ repo, owner }) => makeRequests({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put'
})

export const unStarRepoApi = ({ repo, owner }) => makeRequests({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete'
})
