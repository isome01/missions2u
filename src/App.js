import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Navbar from 'missions2u/common/components/Navbar'
import {browserHistory} from 'react-router'
import {BrowserRouter, Switch, Redirect} from 'react-router-dom'
import browserStorage from 'missions2u/config/browserStorage'
import routes from './routes'

const App = () => {

  React.useEffect(() => {
    /* determine whether frequent visitor */
    console.log('hello app.')
  }, [])

  const initialVisit = browserStorage.get('initialVisit') !== 'true'

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>{routes.map(route => route)}</Switch>
      {(!initialVisit && <Navbar />) || (
        <Redirect to='/landing/info' />
      )}
    </BrowserRouter>
  )
}

App.propTypes = {

}

App.defaultProps = {

}

export default App
