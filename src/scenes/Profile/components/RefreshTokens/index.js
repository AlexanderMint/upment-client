import React from 'react'
import PropTypes from 'prop-types'

const RefreshTokens = ({ tokens }) => (
  <div>
    <h3>Sessions:</h3>
    <ul>
      {tokens.map(({ id, token, createdAt }) => (
        <li key={id}><b>{id}</b>: {token} <small>{createdAt}</small></li>
      ))}
    </ul>
  </div>
)

RefreshTokens.propTypes = {
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.integer,
      token: PropTypes.string,
      createdAt: PropTypes.string
    })
  ).isRequired
}

export default RefreshTokens
