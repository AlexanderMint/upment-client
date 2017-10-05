import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import ApolloClient from 'network/apollo-client'
import reducers from './reducers'

export default class Store {
  constructor(history, initialState = {}) {
    this.data = createStore(
      reducers,
      initialState,
      compose(
        applyMiddleware(
          routerMiddleware(history),
          ApolloClient.middleware(),
          ReduxThunk.withExtraArgument(ApolloClient)
        ),
        // eslint-disable-next-line no-underscore-dangle
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      )
    )
  }
}
