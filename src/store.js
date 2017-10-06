import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

import { routerMiddleware, routerReducer, ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { NETWORK_INTERFACE } from 'config'

export const networkInterface = createNetworkInterface({ uri: NETWORK_INTERFACE })

export const history = createHistory()
export const client = new ApolloClient({ networkInterface })

export const store = initialState => createStore(
  combineReducers({
    router: routerReducer,
    apollo: client.reducer()
  }), initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      client.middleware()
    ),
  )
)

export const router = props => (
  <ApolloProvider client={client} store={store()} >
    <ConnectedRouter history={history}>
      {props.children}
    </ConnectedRouter>
  </ApolloProvider>
)


export default router
