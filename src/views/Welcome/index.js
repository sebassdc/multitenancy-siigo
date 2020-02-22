import React from 'react'
import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button'

const Welcome = () => (
  <div>
    <Link to="/login">Login</Link>
    <Link to="/signup">Register</Link>
  </div>
)

export default Welcome
