import axios from 'axios'

const axiosClients = axios.create({
  baseURL: 'https://zing-mp3-api-sigma.vercel.app/api/',
  timeout: 10000
})

axiosClients.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosClients.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosClients
