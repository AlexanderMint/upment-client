import { put } from 'redux-saga/effects'
import { getCookie, setCookie } from 'services/cookies'
import { push } from 'react-router-redux'

export function* updateTokenSaga(action, redirectPath = null) {
  let { accessToken, refreshToken } = action

  if (accessToken === undefined) {
    accessToken = getCookie('access_token')
  } else if (getCookie('access_token') !== accessToken) {
    setCookie('access_token', accessToken)
  }

  if (refreshToken === undefined) {
    refreshToken = getCookie('refresh_token')
  } else if (getCookie('refresh_token') !== refreshToken) {
    setCookie('refresh_token', refreshToken)
  }

  if (redirectPath) { yield put(push(redirectPath)) }
}
