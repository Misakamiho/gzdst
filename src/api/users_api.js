import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.31.119:1234/'

export const login = (data) => {
  return axios({
    method: 'post',
    url: 'login',
    data
  })
}
