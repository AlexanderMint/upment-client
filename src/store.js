import React from 'react'

// Redux
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'

// Redux Router
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
// import reducers from './reducers'

const history = createHistory()
// const middleware = routerMiddleware(history)
// export const store = createStore(reducers, applyMiddleware(middleware))

export default props => {
  return (
    <ConnectedRouter history={history}>
      {props.children}
    </ConnectedRouter>
  )
}
