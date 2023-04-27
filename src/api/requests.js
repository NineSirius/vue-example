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

export const getTeamList = async () => {
  return await strapiApi.get('teams?populate=deep').json()
}

export const loginUser = (data) => {
  return strapiApi.post('auth/local', { json: data }).json()
}

export const registerUser = (data) => {
  return strapiApi.post('auth/local/register', { json: data }).json()
}

export const getPageInfo = (pageName) => {
  return strapiApi.get(`${pageName}?populate=deep,*`).json()
}

export const updateImage = async (id, image, token) => {
  return await strapiApi
    .post(`upload?id=${id}`, {
      body: image,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .json()
}

export const sendPageData = (data, path, token) => {
  return strapiApi
    .put(`${path}`, {
      json: {
        data
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .json()
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
