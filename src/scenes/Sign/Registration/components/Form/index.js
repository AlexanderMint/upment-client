import React from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import purecss from 'purecss'
import { push } from 'react-router-redux'
import query from './graphql/SignUp.graphql'

export class SignUpForm extends React.Component {
  state = {
    firstName: 'asdfasdfasdf',
    lastName: 'asdfasdfasdf',
    email: `asdfasd${Math.random()}fasdf@asdfasdfasd.ru`
  }

  onChange = field => (event) => {
    this.setState({
      ...this.state,
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    // console.log( event, this.props )
    this.props.mutate({
      variables: this.state
    })
      .then( data => {
        console.log( data )
        this.props.blahblah()
        this.props.redirect()
      })
      .catch( err => {
        console.log( err )
        this.props.redirect()
      })

    event.preventDefault()
  }

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <form className={classNames(purecss['pure-form'], purecss['pure-form-aligned'])} onSubmit={this.handleSubmit}>
        <fieldset>
          <div className={purecss['pure-control-group']}>
            <label htmlFor="first_name">First Name</label>
            <input value={firstName} id="first_name" name="first_name" placeholder="Mark" type="text" onChange={this.onChange('firstName')} />
          </div>
          <div className={purecss['pure-control-group']}>
            <label htmlFor="last_name">Last Name</label>
            <input value={lastName} id="last_name" name="last_name" placeholder="Zuckerberg" type="text" onChange={this.onChange('lastName')} />
          </div>
          <div className={purecss['pure-control-group']}>
            <label htmlFor="email">Email</label>
            <input value={email} id="email" name="email" placeholder="mark@example.com" type="text" onChange={this.onChange('email')} />
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

const mapStateToProps = state => {return{}
}

const mapDispatchToProps = (dispatch, a, b, c) => {
  // console.log( dispatch, a, b, c, replace(), replace( '/') )
  return {
    redirect: () => dispatch(push( '/'))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(
  compose(
  graphql(query),
)(SignUpForm))

// export default connect(
//   mapStateToProps, {
//     redirect: redirect
//   }
// )(SignUpForm)
