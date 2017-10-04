import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import { client } from '../network'

export default combineReducers({
  router: routerReducer
  // apollo: client.reducer()
})
