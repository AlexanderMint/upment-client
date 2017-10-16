import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import ApolloClient from 'network/apollo-client'
import sagas from 'sagas'
import reducers from './reducers'

export default class Store {
  constructor(history, initialState = {}) {
    const compositor = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools
    const sagaMiddleware = createSagaMiddleware(history)

    this.data = createStore(
      reducers,
      initialState,
      compositor(
        applyMiddleware(
          sagaMiddleware,
          routerMiddleware(history),
          ApolloClient.middleware()
        )
      )
    )
    sagaMiddleware.run(sagas)
  }
}
