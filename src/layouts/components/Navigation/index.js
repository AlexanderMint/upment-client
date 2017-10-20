import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'
import purecss from 'purecss'
import { clearTokens } from 'store/actions/token_actions'
import { logoutUser } from 'store/actions/user_actions'
import { redirectTo } from 'store/actions/redirect_actions'

import { spanCss } from './styles.scss'

class Navigation extends React.Component {
  haveTokens = () => {
    const { refreshToken, accessToken } = this.props
    return !!refreshToken && !!accessToken
  }

  signOut = () => {
    this.props.logoutUser()
    this.props.clearTokens()
    this.props.redirectTo('/')
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
          { this.haveTokens() && <li className={purecss['pure-menu-item']}>
            <Link className={classNames(purecss['pure-menu-link'], spanCss)} to="/profile">Profile</Link>
          </li> }
          { this.haveTokens() && <li className={purecss['pure-menu-item']}>
            <span className={classNames(purecss['pure-menu-link'], spanCss)} onClick={this.signOut}>Sign Out</span>
          </li> }
        </ul>
      </div>
    )
  }
}

Navigation.propTypes = {
  accessToken: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  refreshToken: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  clearTokens: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired
}

Navigation.defaultProps = {
  accessToken: false,
  refreshToken: false
}

const mapStateToProps = state => ({
  accessToken: state.tokens.accessToken,
  refreshToken: state.tokens.refreshToken
})
const mapDispatchToProps = { clearTokens, logoutUser, redirectTo }

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
