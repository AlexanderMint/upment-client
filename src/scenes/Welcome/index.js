import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import query from './graphql/Users.graphql'
import { title } from './styles.scss'
import Users from './components/Users'

const Welcome = props => (
  <div>
    <h1 className={title}>Welcome!</h1>
    <Users data={props.data} />
  </div>
)

Welcome.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array
  }).isRequired
}

export default graphql(query)(Welcome)
