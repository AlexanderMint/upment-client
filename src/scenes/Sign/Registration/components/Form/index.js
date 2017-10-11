import React from 'react'
import { graphql, compose } from 'react-apollo'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import purecss from 'purecss'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { setCookie } from 'services/cookies'
import query from './graphql/SignUp.graphql'


export class SignUpForm extends React.Component {
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
        const { accessToken, refreshToken } = data.signUp

        setCookie('access_token', accessToken)
        setCookie('refresh_token', refreshToken)

        this.props.redirect()
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
  redirect: PropTypes.func.isRequired
}

const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(push('/'))
})

export default compose(
  graphql(query),
  connect(mapStateToProps, mapDispatchToProps)
)(SignUpForm)
