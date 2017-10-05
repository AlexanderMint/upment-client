import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import createHistory from 'history/createBrowserHistory'
import Routes from './routes'
import Store from './store'
import ApolloClient from './network/apollo-client'

// Store
const history = createHistory()
const store = new Store(history)

// Root
const div = document.createElement('div')
document.body.append(div)

ReactDOM.render(
  <ApolloProvider client={ApolloClient} store={store.data}>
    <Routes history={history} />
  </ApolloProvider>
  , div)
