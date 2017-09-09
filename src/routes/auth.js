import React from 'react'

// Layout
import Layout from 'layouts/Auth'

// Scenes
import Authorization from 'scenes/Sign/Authorization'
import Registration from 'scenes/Sign/Registration'

// Utils
import RouteWithLayout from './utils/RouteWithLayout'

export default () => (
  <div>
    <RouteWithLayout component={Authorization} exact layout={Layout} path="/sign_in" />
    <RouteWithLayout component={Registration} exact layout={Layout} path="/sign_up" />
  </div>
)
