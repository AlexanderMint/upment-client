import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import Routes from './routes'
import { store, history } from './store'
import ApolloClient from './network/apollo-client'

// Root
const div = document.createElement('div')
document.body.append(div)

ReactDOM.render(
  <ApolloProvider client={ApolloClient} store={store}>
    <Routes history={history} />
  </ApolloProvider>
  , div)
