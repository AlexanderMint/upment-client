import React from 'react'
import { Router } from 'react-router'
import PropTypes from 'prop-types'

import LayoutApp from 'layouts/App'

import Auth from './auth'
import Public from './public'

const Routes = ({ history }) => (
  <Router history={history}>
    <LayoutApp>
      <Auth />
      <Public />
    </LayoutApp>
  </Router>
)

Routes.propTypes = {
  history: PropTypes.func.isRequired
}

export default Routes
