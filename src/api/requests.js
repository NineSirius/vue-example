import ky from 'ky'

const strapiApi = ky.create({
  prefixUrl: 'http://localhost:1337/api'
})

export const sendEmail = (data) => {
  return strapiApi.post('requests', { json: { data: { email: data } } }).json()
}

export const getReviews = () => {
  return strapiApi.get('reviews').json()
}
