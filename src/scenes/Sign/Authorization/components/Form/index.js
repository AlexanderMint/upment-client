import React from 'react'
import { graphql, compose } from 'react-apollo'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import purecss from 'purecss'
import { connect } from 'react-redux'
import { updateTokenAndRedirect } from '../../../actions/update_token_and_redirect'
import query from './graphql/SignIn.graphql'


export class SignInForm extends React.Component {
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
        this.props.updateTokenAndRedirect(data.signIn)
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
            <input className={classNames(purecss['pure-button'], purecss['pure-button-primary'])} type="submit" value="Submit" />
          </div>
        </fieldset>
      </form>
    )
  }
}

SignInForm.propTypes = {
  mutate: PropTypes.func.isRequired,
  updateTokenAndRedirect: PropTypes.func.isRequired
}

const mapStateToProps = () => ({})
const mapDispatchToProps = { updateTokenAndRedirect }

export default compose(
  graphql(query),
  connect(mapStateToProps, mapDispatchToProps)
)(SignInForm)
