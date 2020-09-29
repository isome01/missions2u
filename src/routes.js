import React from 'react'
import { Route } from 'react-router'
import LandingInfo from 'missions2u/modules/LandingInfo'
import browserStorage from 'missions2u/config/browserStorage'

const unsetInitialVisit = () => browserStorage.set('initialVisit', 'true')

const routes = [
  <Route path='/landing/info' key='/landing/info' component={
    props => (
      <LandingInfo
        {...props}
        unsetInitialVisit={unsetInitialVisit}
      />
    )}
  />,
  <Route path='/home' key='/home' />
]

export default routes