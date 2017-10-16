import { all, takeEvery } from 'redux-saga/effects'
import { updateTokenSaga } from './tokenSagas'

export default function* () {
  yield all([
    takeEvery('SET_TOKEN', updateTokenSaga)
  ])
}
