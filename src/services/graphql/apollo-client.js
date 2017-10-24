import { NETWORK_INTERFACE } from 'config'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { getCookie, setCookie } from 'services/cookies'
import { updateToken } from 'store/actions/token_actions'

const networkInterface = createNetworkInterface({ uri: NETWORK_INTERFACE })
const tokenSeparator = '$'

// GET AND SEND TOKENS
networkInterface.use([{
  applyMiddleware(req, next) {
    const refreshToken = getCookie('refresh_token')
    const accessToken = getCookie('access_token')

    if (refreshToken && accessToken) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      req.options.headers.authorization = `Bearer ${refreshToken + tokenSeparator + accessToken}`
    }

    next()
  }
}])

// SET_TOKENS
networkInterface.useAfter([{
  applyAfterware({ response }, next) {
    if (response.headers.get('Authorization')) {
      const [refreshToken, accessToken] = response.headers.get('Authorization').split(tokenSeparator)
      setCookie('access_token', accessToken)
      setCookie('refresh_token', refreshToken)
      window.store.dispatch(updateToken({ refreshToken, accessToken }))
    }

    next()
  }
}])

export default new ApolloClient({
  networkInterface,
  reduxRootSelector: state => state.graphql
})

