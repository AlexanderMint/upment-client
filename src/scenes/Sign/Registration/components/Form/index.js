import React from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import purecss from 'purecss'
import query from './graphql/SignUp.graphql'

export class SignUpForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
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
    return (
      <form className={classNames(purecss['pure-form'], purecss['pure-form-aligned'])} onSubmit={this.handleSubmit}>
        <fieldset>
          <div className={purecss['pure-control-group']}>
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" name="first_name" placeholder="Mark" type="text" onChange={this.onChange('firstName')} />
          </div>
          <div className={purecss['pure-control-group']}>
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" name="last_name" placeholder="Zuckerberg" type="text" onChange={this.onChange('lastName')} />
          </div>
          <div className={purecss['pure-control-group']}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="mark@example.com" type="text" onChange={this.onChange('email')} />
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
  mutate: PropTypes.func.isRequired
}

export default graphql(query)(SignUpForm)
