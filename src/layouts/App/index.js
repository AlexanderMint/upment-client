import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Navigation from 'layouts/components/Navigation'
import Loading from 'Loading'
import Notifications from 'Notifications'

import { updateToken } from 'store/actions/token_actions'

class App extends React.Component {
  componentWillMount() {
    this.props.updateToken()
  }

  render() {
    return (
      <div>
        <Loading />
        <Notifications />
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  updateToken: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  accessToken: state.tokens.accessToken,
  refreshToken: state.tokens.refreshToken
})

const mapDispatchToProps = { updateToken }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

