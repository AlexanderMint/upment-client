import { NETWORK_INTERFACE } from 'config'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({ uri: NETWORK_INTERFACE })

export default new ApolloClient({
  networkInterface,
  reduxRootSelector: state => state.graphql
})

