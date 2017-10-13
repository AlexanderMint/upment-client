export const initialState = {
  refreshToken: null,
  accessToken: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken
      }
    default:
      return state
  }
}
