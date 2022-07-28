import { makeRequests } from '../requests'

export const getIssues = ({ owner, repo }) => {
  const params = new URLSearchParams()
  params.append('per_page', 10)

  return makeRequests({
    url: `/repos/${owner}/${repo}/issues`
  })
}
