import React from 'react'
import { Route, Switch } from 'react-router'

// APPS
import Welcome from 'components/Welcome'

export default () => (
  <Switch>
    <Route component={Welcome} exact path="/" />
  </Switch>
)
