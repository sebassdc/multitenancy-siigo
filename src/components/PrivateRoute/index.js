import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { mapStateToProps } from './store'

const PrivateRoute = ({ children, isUserLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      true ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { from: location },
          }}
        />
      )
    }
  />
)

PrivateRoute.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(PrivateRoute)
