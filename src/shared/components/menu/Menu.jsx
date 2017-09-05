import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <Link to="/">Home</Link> |
    <Link to="/sign_in"> Sign in</Link> |
    <Link to="/sign_up"> Sign up</Link>
  </div>
)
