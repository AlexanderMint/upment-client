export const setToken = (params = {}) => ({
  type: 'SET_TOKEN',
  accessToken: params.accessToken,
  refreshToken: params.refreshToken
})
