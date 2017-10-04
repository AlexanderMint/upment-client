import React from 'react'
import PropTypes from 'prop-types'

const Users = ({ data }) => {
  if (data.loading) {
    return <p>Loading...</p>
  } else if (data.error) {
    return <p>Error!</p>
  }

  return (
    <ul>
      {data.users.map(({ id, firstName, lastName, email }) => (
        <li key={id}><b>{id}</b>: {firstName} {lastName} <small>{email}</small></li>
      ))}
    </ul>
  )
}

Users.propTypes = {
  data: PropTypes.shape({
    users: {
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    },
    loading: PropTypes.bool
  }).isRequired
}

export default Users
