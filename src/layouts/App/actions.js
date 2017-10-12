import { getCookie } from 'services/cookies'

export const updateToken = (params = {}) => {
  let { refreshToken, accessToken } = params

  if (accessToken === undefined) { accessToken = getCookie('access_token') }
  if (refreshToken === undefined) { refreshToken = getCookie('refresh_token') }

  return {
    type: 'SET_TOKEN',
    accessToken,
    refreshToken
  }
}
