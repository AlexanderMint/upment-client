import React from 'react'
import { NETWORK_INTERFACE } from 'config'

// GraphQL
// Redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { routerMiddleware, routerReducer } from 'react-router-redux'

const networkInterface = createNetworkInterface({ uri: NETWORK_INTERFACE })
const middleware = routerMiddleware(history)
export const client = new ApolloClient({ networkInterface })
export const store = createStore(
  combineReducers({
    router: routerReducer,
    apollo: client.reducer()
  }), undefined,
  compose(
    applyMiddleware(
      middleware,
      client.middleware()
    ),
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
)

export default props => (
  <ApolloProvider client={client} store={store} >
    {props.children}
  </ApolloProvider>
)
