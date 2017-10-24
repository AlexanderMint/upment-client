import React from 'react'

// Layout
import Layout from 'layouts/Welcome'

// Scenes
import Profile from 'scenes/Profile'
import ProfileEdit from 'scenes/Profile/scenes/Edit'

// Utils
import RouteWithLayout from './utils/RouteWithLayout'

export default () => (
  <div>
    <RouteWithLayout component={Profile} exact layout={Layout} path="/profile" />
    <RouteWithLayout component={ProfileEdit} exact layout={Layout} path="/profile/edit" />
  </div>
)
