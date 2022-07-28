import { makeRequests } from '../requests'
import env from '../../../env'

export const getAccessTokenByPersonalCode = (code) => makeRequests({
  url: 'https://webdev-api.loftschool.com/github',
  method: 'post',
  data: {
    code,
    clientId: env.clientId,
    clientSecret: env.clientSecret
  }
})

export const sendUserToAuthPage = () => {
  const githubAuthApi = 'https://github.com/login/oauth/authorize'
  const params = new URLSearchParams()
  params.append('client_id', env.clientId)
  params.append('scope', 'repo:status public_repo read:user')
  window.location.href = `${githubAuthApi}?${params}`
}
