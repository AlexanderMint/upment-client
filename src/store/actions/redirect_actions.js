import { push } from 'react-router-redux'

export const redirectTo = path => (dispatch) => {
  dispatch(push(path))
}
