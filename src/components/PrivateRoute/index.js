import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { mapStateToProps } from './store'

const PrivateRoute = ({ children, isUserLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isUserLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(PrivateRoute)
