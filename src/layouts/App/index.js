import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Navigation from 'layouts/components/Navigation'
import Loading from 'Loading'
import Notifications from 'Notifications'

import { updateToken } from './actions'

class App extends React.Component {
  // componentWillMount() {
  //   this.props.updateToken()
  // }

  // componentWillReceiveProps( nextProps ) {
  //   const { accessToken, refreshToken } = nextProps;
  //   // this.props.getUserData
  // }

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

// App.propTypes = {
//   updateToken: PropTypes.func.isRequired
// }
//
// const mapStateToProps = state => ({
//   accessToken: state.tokens.accessToken,
//   refreshToken: state.tokens.refreshToken
// })
//
// const mapDispatchToProps = { updateToken }

// export default connect(null /*mapStateToProps*/, null, /*mapDispatchToProps*/)(App)

export default App
