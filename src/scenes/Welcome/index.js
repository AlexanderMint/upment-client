import React from 'react'
import { graphql } from 'react-apollo'
import query from './services/graphql/Users.graphql'
import { title } from './styles.scss'

const Welcome = () => (
  <div>
    <h1 className={title}>Welcome!</h1>
  </div>
)

export default graphql(query)(Welcome)
