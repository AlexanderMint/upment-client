import React from 'react'

// Layout
import Layout from 'layouts/Welcome'

// Scenes
import Welcome from 'scenes/Welcome'

// Utils
import RouteWithLayout from './utils/RouteWithLayout'

export default () => (
  <RouteWithLayout component={Welcome} exact layout={Layout} path="/" />
)
