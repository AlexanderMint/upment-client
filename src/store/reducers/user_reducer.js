export const initialState = {
  firstName: null,
  lastName: null,
  email: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email
      }
    default:
      return state
  }
}
