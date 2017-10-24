import { createStore, compose, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import ApolloClient from 'services/graphql/apollo-client'
import reducers from './reducers'

class Store {
  constructor(history, initialState = {}) {
    const compositor = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools
    this.data = createStore(
      reducers,
      initialState,
      compositor(
        applyMiddleware(
          routerMiddleware(history),
          ApolloClient.middleware(),
          ReduxThunk.withExtraArgument(ApolloClient)
        )
      )
    )
  }
}


export const history = createHistory()
export const store = new Store(history).data
export default () => store

window.store = store
