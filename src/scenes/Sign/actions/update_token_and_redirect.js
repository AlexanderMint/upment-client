import { push } from 'react-router-redux'
import { updateToken } from 'store/actions/token_actions'

export const updateTokenAndRedirect = params => (dispatch) => {
  dispatch(updateToken(params))
  dispatch(push('/'))
}

