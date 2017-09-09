import React from 'react'

import Navigation from 'layouts/components/Navigation'

export default props => (
  <div>
    <Navigation />
    {props.children}
  </div>
)
