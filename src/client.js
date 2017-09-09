import React from 'react'
import ReactDOM from 'react-dom'
import Store from './store'
import Network from './network'
import Routes from './routes'

// Root
const div = document.createElement('div')
document.body.append(div)

ReactDOM.render(
  <Network>
    <Store>
      <Routes />
    </Store>
  </Network>
  , div)
