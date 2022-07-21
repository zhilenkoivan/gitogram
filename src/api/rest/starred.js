import { makeRequests } from '../requests'

export const getStarredRepos = ({ limit }) => {
  const params = new URLSearchParams()
  if (limit) {
    params.append('per_page', limit)
  }
  return makeRequests({
    url: `/user/starred?${params}`
  })
}

export const starRepo = ({ repo, owner }) => makeRequests({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put'
})

export const unStarRepo = ({ repo, owner }) => makeRequests({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete'
})
