import React from 'react'
import { graphql } from 'react-apollo'
import query from 'graphql/Users.gql'
import { title } from './Welcome.scss'

export class Welcome extends React.Component {
  componentWillMount() {
    // debugger
  }
  componentWillReceiveProps() {
    // debugger
  }
  render() {
    // debugger
    return (
      <div>
        <h1 className={title}>Welcome!</h1>
        <ul>
          { console.log(this.props.data) }
        </ul>
      </div>
    )
  }
}

export default graphql(query)(Welcome)
