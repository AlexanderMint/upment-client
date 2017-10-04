import React from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import query from './graphql/SignUp.graphql'


export class SignUpForm extends React.Component {
  state = {
    firstName: Math.random().toString(36).substring(7),
    lastName: Math.random().toString(36).substring(7),
    email: `${Math.random().toString(36).substring(7)}@a.a`
  }

  onChange = field => (event) => {
    this.setState({
      ...this.state,
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.mutate({
      variables: this.state
    })

    event.preventDefault()
  }

  render() {
    const { firstName, lastName, email } = this.state
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="first_name" placeholder="First name" type="text" value={firstName} onChange={this.onChange('firstName')} /><br />
          <input name="last_name" placeholder="Last name" type="text" value={lastName} onChange={this.onChange('lastName')} /><br />
          <input name="email" placeholder="E-mail" type="text" value={email} onChange={this.onChange('email')} /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

SignUpForm.propTypes = {
  mutate: PropTypes.func.isRequired
}

export default graphql(query)(SignUpForm)
