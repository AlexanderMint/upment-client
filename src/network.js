import React from 'react'
import { NETWORK_INTERFACE } from 'config'

// GraphQL
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({ uri: NETWORK_INTERFACE })
const client = new ApolloClient({ networkInterface })

export default props => (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
)
