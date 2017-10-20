export const setUser = (params = {}) => {
  const { id, firstName, lastName, email } = params

  return {
    type: 'SET_USER',
    id,
    firstName,
    lastName,
    email
  }
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

