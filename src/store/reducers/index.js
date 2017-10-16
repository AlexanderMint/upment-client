import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ApolloClient from 'network/apollo-client'
import tokenReducer from './token_reducers'
import userReducer from './user_reducers'

export default combineReducers({
  router: routerReducer,
  graphql: ApolloClient.reducer(),
  tokens: tokenReducer,
  user: userReducer
})
