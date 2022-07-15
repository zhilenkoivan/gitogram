import { makeRequests } from '../requests'

export const getReadme = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  return makeRequests({
    url: `/repos/${owner}/${repo}/readme`,
    headers: {
      accept: contentHeader
    }
  })
}
