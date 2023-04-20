import ky from 'ky'

const strapiApi = ky.create({
  prefixUrl: 'http://localhost:1337/api'
})

export const sendEmail = (data) => {
  return strapiApi.post('requests?populate', { json: { data: { email: data } } }).json()
}

export const getReviews = () => {
  return strapiApi.get('reviews?populate=avatar').json()
}

export const getTeamList = () => {
  return strapiApi.get('teams?populate=*').json()
}

export const loginUser = (data) => {
  return strapiApi.post('auth/local', { json: data }).json()
}

export const registerUser = (data) => {
  return strapiApi.post('auth/local/register', { json: data }).json()
}

export const getUserInfo = (token) => {
  return strapiApi
    .get('users/me?populate=*', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .json()
}

export const sendMessageData = (data) => {
  return strapiApi
    .post('messages', {
      json: {
        data
      }
    })
    .json()
}
