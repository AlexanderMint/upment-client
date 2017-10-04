import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import purecss from 'purecss'

export default () => (
  <div className={classNames(purecss['pure-menu'], purecss['pure-menu-horizontal'])}>
    <ul className={purecss['pure-menu-list']}>
      <li className={purecss['pure-menu-item']}>
        <Link className={purecss['pure-menu-link']} to="/">Home</Link>
      </li>
      <li className={purecss['pure-menu-item']}>
        <Link className={purecss['pure-menu-link']} to="/sign_in"> Sign in</Link>
      </li>
      <li className={purecss['pure-menu-item']}>
        <Link className={purecss['pure-menu-link']} to="/sign_up"> Sign up</Link>
      </li>
    </ul>
  </div>
)
