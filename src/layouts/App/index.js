import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { graphql, compose } from 'react-apollo'

import Navigation from 'layouts/components/Navigation'
import Loading from 'Loading'
import Notifications from 'Notifications'

import { setUser } from 'store/actions/user_actions'

import query from './query.graphql'

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    const currentUser = nextProps.data.currentUser
    if (currentUser) { this.props.setUser(currentUser) }
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
  data: PropTypes.object,
  setUser: PropTypes.func.isRequired
}

App.defaultProps = {
  data: undefined
}

const mapStateToProps = () => ({})

const mapDispatchToProps = { setUser }

export default withRouter(compose(
  graphql(query),
  connect(mapStateToProps, mapDispatchToProps)
)(App))
