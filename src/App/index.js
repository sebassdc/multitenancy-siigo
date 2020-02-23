import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import './App.css'
import Welcome from '../views/Welcome'
import SignUp from '../views/SignUp'
import Login from '../views/Login'
import Store from '../views/Store'
import Warehouse from '../views/Warehouse'
import { mapStateToProps, mapDispatchToProps } from './store'

const App = ({ initAuthListener }) => {
  useEffect(() => {
    initAuthListener()
  }, [initAuthListener])
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/store">
        <Store />
      </PrivateRoute>
      <PrivateRoute path="/warehouse">
        <Warehouse />
      </PrivateRoute>
    </Switch>
  )
}

App.propTypes = {
  initAuthListener: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
