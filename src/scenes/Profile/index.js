import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import query from './query.graphql'

class Profile extends React.Component {
  componentWillMount() {
    this.current_user = this.props.data.currentUser
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p><b>ID: </b> {this.current_user.id}</p>
        <p><b>First name: </b> {this.current_user.firstName}</p>
        <p><b>Last name: </b> {this.current_user.lastName}</p>
        <p><b>Email: </b> {this.current_user.email}</p>
      </div>
    )
  }
}

Profile.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    currentUser: PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string
    })
  }).isRequired
}

const mapStateToProps = state => ({
  user_id: state.user.id
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(query, {
    options: props => ({
      variables: { id: props.user_id }
    })
  })(Profile)
)
