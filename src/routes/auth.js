import React from 'react'
import { Route, Switch } from 'react-router'

// APPS
import Authorization from 'components/auth/Authorization'
import Registration from 'components/auth/Registration'

export default () => (
  <Switch>
    <Route component={Authorization} exact path="/sign_in" />
    <Route component={Registration} exact path="/sign_up" />
  </Switch>
)
