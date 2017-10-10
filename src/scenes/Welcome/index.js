import React, { Component } from 'react'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import query from './graphql/Users.graphql'
import { title } from './styles.scss'
import Users from './components/Users'

export class Welcome extends Component {
  componentWillMount() {
    console.log(this.props, this.props.replace('asdfasdfads'))
  }
  render() {
    return (
      <div>
        <h1 className={title}>Welcome!</h1>
        <Users data={this.props.data} />
      </div>
    )
  }
}

// const Welcome = props => (
//   <div>
//     <h1 className={title}>Welcome!</h1>
//     <Users data={props.data} />
//   </div>
// )

// Welcome.propTypes = {
//   data: PropTypes.object.isRequired
// }

export default graphql(query)(connect(
  state => ({
    state
  }), dispatch => ({
    replace: url => dispatch(replace(url))
  })
)(Welcome))
