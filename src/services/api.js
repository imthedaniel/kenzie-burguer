import axios from 'axios'

const api = axios.create({
  BASE_URL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com',
})

export default api
