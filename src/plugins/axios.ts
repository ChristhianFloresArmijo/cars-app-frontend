import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const _axios = axios.create({ baseURL })

_axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('access_token')
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },

  function (error) {
    localStorage.clear()
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },

  function (error) {
    const originalRequest = error.config
    if (error.response && error.response.status === 401) {
      // store.dispatch('auth/logout')
      return Promise.reject('Credenciales expiradas')
    }

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem('refresh_token')

      return axios.post('auth/token/', {
        grant_type: 'refresh_token',
        client_id: '',
        client_secret: '',
        refresh_token: refreshToken
      }).then(response => {
        // if (response.status === 201) {
        localStorage.setItem('access_token', response.data['access'])
        if (axios.defaults.headers) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`
        }
        return axios(originalRequest)
        // }
      })
    }
    return Promise.reject(error)
  }
)



export function setCredentials({ access_token, refresh_token }: { access_token: string, refresh_token: string }) {
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)

  if (_axios.defaults && _axios.defaults.headers) {
    _axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
  }
}

export default _axios
export type { AxiosResponse } from 'axios'
