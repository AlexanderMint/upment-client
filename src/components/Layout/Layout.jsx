import React from 'react'

// Shared
import Menu from 'shared/components/menu'

export default props => (
  <div>
    <Menu />
    {props.children}
  </div>
)
