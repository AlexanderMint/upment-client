import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import PropTypes from 'prop-types'

import LayoutApp from 'layouts/App'

import Auth from './auth'
import Public from './public'

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <LayoutApp>
      <Auth />
      <Public />
    </LayoutApp>
  </ConnectedRouter>
)

Routes.propTypes = {
  history: PropTypes.object.isRequired
}

export default Routes
