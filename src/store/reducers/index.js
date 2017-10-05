import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ApolloClient from 'network/apollo-client'

export default combineReducers({
  router: routerReducer,
  graphql: ApolloClient.reducer()
})
