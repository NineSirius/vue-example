import axios from 'axios'

const strapiApi = axios.create({ baseURL: 'http://localhost:1337/api' })

export const sendEmail = (data) => {
  return strapiApi.post('requests', { json: data }).json()
}
