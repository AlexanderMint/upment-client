import React from 'react'
import PropTypes from 'prop-types'

export const propTypes = {
  first_name: ''
}

const Users = ({ data }) => {
  if (data.loading) {
    return <p>Loading...</p>
  } else if (data.error) {
    return <p>Error!</p>
  }

  return (
    <ul>
      {data.users.map(({ id, firstName, lastName }) => (
        <li key={id}>{firstName} {lastName}</li>
      ))}
    </ul>
  )
}

Users.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    id: PropTypes.number,
    lastName: PropTypes.string
  }).isRequired
}

export default Users
