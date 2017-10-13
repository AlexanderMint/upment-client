import { push } from 'react-router-redux'
import { clearTokens } from 'store/actions/token_actions'

export const signOut = (dispatch) => {
  dispatch(push('/'))
  dispatch(clearTokens())
}

