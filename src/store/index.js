import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import ApolloClient from 'network/apollo-client'
import reducers from './reducers'

export default class Store {
  constructor(history, initialState = {}) {
    console.log(NODE_ENV)
    const compositor = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools
    this.data = createStore(
      reducers,
      initialState,
      compositor(
        applyMiddleware(
          routerMiddleware(history),
          ApolloClient.middleware(),
          ReduxThunk.withExtraArgument(ApolloClient)
        ),
        // eslint-disable-next-line no-underscore-dangle
        // (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      )
    )
  }
}
