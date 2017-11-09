import React from 'react'
import { graphql, compose } from 'react-apollo'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import purecss from 'purecss'
import { connect } from 'react-redux'
import { setUser } from 'store/actions/user_actions'
import { redirectTo } from 'store/actions/redirect_actions'
import query from './query.graphql'

class ProfileEdit extends React.Component {
  state = {
    id: this.props.user.id,
    firstName: this.props.user.firstName ? this.props.user.firstName : '',
    lastName: this.props.user.lastName ? this.props.user.lastName : ''
  }

  onChange = field => (event) => {
    this.setState({
      ...this.state,
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.mutate({
      variables: this.state
    })
      .then(({ data }) => {
        this.props.setUser(data.updateUser)
        this.props.redirectTo('/profile')
      }).catch((error) => {
        console.log('there was an error sending the query', error)
      })
  }

  render() {
    return (
      <div>
        <h1>Profile edit</h1>
        <form className={classNames(purecss['pure-form'], purecss['pure-form-aligned'])} onSubmit={this.handleSubmit}>
          <fieldset>
            <div className={purecss['pure-control-group']}>
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.onChange('firstName')}
              />
            </div>
            <div className={purecss['pure-control-group']}>
              <label htmlFor="email">Last name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.onChange('lastName')}
              />
            </div>
            <div className={purecss['pure-controls']}>
              <input className={classNames(purecss['pure-button'], purecss['pure-button-primary'])} type="submit" value="Submit" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

ProfileEdit.propTypes = {
  mutate: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.int,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = { setUser, redirectTo }

export default compose(
  graphql(query),
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileEdit)

