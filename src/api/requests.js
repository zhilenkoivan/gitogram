import axios from 'axios'

const baseURL = 'https://api.github.com'

export const makeRequests = ({
  url, method = 'get', data = {}, headers = {}
}) => {
  const token = localStorage.getItem('token')

  if (token) {
    axios.defaults.headers.Authorization = `token ${token}`
  }
  return axios({
    url,
    method,
    data,
    headers,
    baseURL
  })
}
