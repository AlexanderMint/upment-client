import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import RefreshTokens from './components/RefreshTokens'
import query from './query.graphql'

class Profile extends React.Component {
  componentWillMount() {
    this.data = this.props.data
  }

  componentWillReceiveProps(nextProps) {
    this.data = nextProps.data
  }

  render() {
    if (this.data.loading) {
      return <p>Loading...</p>
    } else if (this.data.error) {
      return <p>Error!</p>
    }
    return (
      <div>
        <h1>Profile</h1>
        <p><b>ID: </b> {this.data.currentUser.id}</p>
        <p><b>First name: </b> {this.data.currentUser.firstName}</p>
        <p><b>Last name: </b> {this.data.currentUser.lastName}</p>
        <p><b>Email: </b> {this.data.currentUser.email}</p>
        <br />
        <Link to="profile/edit">Edit</Link>
        <hr />
        <RefreshTokens data={this.data} />
      </div>
    )
  }
}

Profile.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    currentUser: PropTypes.shape({
      id: PropTypes.integer,
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
    options: {
      fetchPolicy: 'network-only'
    }
  })(Profile)
)
