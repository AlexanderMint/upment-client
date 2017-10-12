import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'
import purecss from 'purecss'

class Navigation extends React.Component {
  haveTokens = () => {
    const { refreshToken, accessToken } = this.props
    return !!refreshToken && !!accessToken
  }

  render() {
    return (
      <div className={classNames(purecss['pure-menu'], purecss['pure-menu-horizontal'])}>
        <ul className={purecss['pure-menu-list']}>
          <li className={purecss['pure-menu-item']}>
            <Link className={purecss['pure-menu-link']} to="/">Home</Link>
          </li>
          { !this.haveTokens() && <li className={purecss['pure-menu-item']}>
            <Link className={purecss['pure-menu-link']} to="/sign_in">Sign in</Link>
          </li>}
          { !this.haveTokens() && <li className={purecss['pure-menu-item']}>
            <Link className={purecss['pure-menu-link']} to="/sign_up">Sign up</Link>
          </li> }
        </ul>
      </div>
    )
  }
}

// Navigation.propTypes = {
//   accessToken: PropTypes.string.isRequired,
//   refreshToken: PropTypes.string.isRequired
// }

const mapStateToProps = state => ({
  accessToken: state.tokens.accessToken,
  refreshToken: state.tokens.refreshToken
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
