import React from 'react'
import { graphql, compose } from 'react-apollo'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import purecss from 'purecss'
import { connect } from 'react-redux'
import { setUser } from 'store/actions/user_actions'
import { updateToken } from 'store/actions/token_actions'
import { redirectTo } from 'store/actions/redirect_actions'
import query from './query.graphql'

class SignUpForm extends React.Component {
  state = {
    email: '',
    password: ''
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
        this.props.setUser(data.signUp)
        this.props.updateToken(data.signUp)
        this.props.redirectTo('/')
      }).catch((error) => {
        alert('there was an error sending the query', error)
      })
  }

  render() {
    return (
      <form className={classNames(purecss['pure-form'], purecss['pure-form-aligned'])} onSubmit={this.handleSubmit}>
        <fieldset>
          <div className={purecss['pure-control-group']}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="mark@example.com"
              type="email"
              value={this.state.email}
              onChange={this.onChange('email')}
            />
          </div>
          <div className={purecss['pure-control-group']}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              placeholder="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange('password')}
            />
          </div>
          <div className={purecss['pure-controls']}>
            <label className={purecss['pure-checkbox']} htmlFor="terms">
              <input id="terms" name="terms" type="checkbox" /> I have read the terms and conditions
            </label>
            <input className={classNames(purecss['pure-button'], purecss['pure-button-primary'])} type="submit" value="Submit" />
          </div>
        </fieldset>
      </form>
    )
  }
}

SignUpForm.propTypes = {
  mutate: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  updateToken: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired
}

const mapStateToProps = () => ({})
const mapDispatchToProps = { setUser, updateToken, redirectTo }

export default compose(
  graphql(query),
  connect(mapStateToProps, mapDispatchToProps)
)(SignUpForm)
