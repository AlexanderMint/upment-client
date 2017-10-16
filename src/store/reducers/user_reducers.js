export const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  email: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email
      }
    default:
      return state
  }
}
