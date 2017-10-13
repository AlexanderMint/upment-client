import { getCookie, setCookie, removeCookie } from 'services/cookies'

export const updateToken = (params = {}) => {
  let { refreshToken, accessToken } = params

  if (accessToken === undefined) {
    accessToken = getCookie('access_token')
  } else if (getCookie('access_token') !== accessToken) {
    setCookie('access_token', accessToken)
  }

  if (refreshToken === undefined) {
    refreshToken = getCookie('refresh_token')
  } else if (getCookie('refresh_token') !== refreshToken) {
    setCookie('refresh_token', refreshToken)
  }

  return {
    type: 'SET_TOKEN',
    accessToken,
    refreshToken
  }
}

export const clearTokens = () => {
  const accessToken = null
  const refreshToken = null

  removeCookie('access_token')
  removeCookie('refresh_token')

  return {
    type: 'SET_TOKEN',
    accessToken,
    refreshToken
  }
}
