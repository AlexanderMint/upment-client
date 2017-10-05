import React from 'react'

import Navigation from 'layouts/components/Navigation'
import Loading from 'Loading'
import Notifications from 'Notifications'

export default props => (
  <div>
    <Loading />
    <Notifications />
    <Navigation />
    {props.children}
  </div>
)
