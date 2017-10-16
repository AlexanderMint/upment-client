export const setUser = (params = {}) => ({
  type: 'SET_USER',
  id: params.id,
  firstName: params.firstName,
  lastName: params.lastName,
  email: params.email
})
