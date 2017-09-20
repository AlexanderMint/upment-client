import React from 'react'

import GlobalLayout from 'layouts/Global'

import Auth from './auth'
import Public from './public'

export default () => (
  <GlobalLayout>
    <Auth />
    <Public />
  </GlobalLayout>
)
