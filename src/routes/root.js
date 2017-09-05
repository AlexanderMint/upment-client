import React from 'react'

// Layout
import Layout from 'components/Layout'

// Routes

import Auth from './auth'
import Public from './public'

export default () => (
  <Layout>
    <Public />
    <Auth />
  </Layout>
)
