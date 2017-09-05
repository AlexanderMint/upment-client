import React from 'react'
import { graphql } from 'react-apollo'
import query from 'graphql/Users.gql'
import { title } from './Welcome.scss'

const Welcome = props => (
  <div>
    <h1 className={title}>Welcome!</h1>
    <ul>
      { console.log(props.data) }
    </ul>
  </div>
)

export default graphql(query)(Welcome)
