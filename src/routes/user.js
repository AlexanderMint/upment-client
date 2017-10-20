import React from 'react'

// Layout
import Layout from 'layouts/Welcome'

// Scenes
import Profile from 'scenes/Profile'

// Utils
import RouteWithLayout from './utils/RouteWithLayout'

export default () => (
  <RouteWithLayout component={Profile} exact layout={Layout} path="/profile" />
)
