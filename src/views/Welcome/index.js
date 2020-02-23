import React from 'react'

import LinkButton from '../../components/LinkButton'
import Divisor from '../../components/Divisor'

import { useStyles } from './styles'

const Welcome = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1>Welcome</h1>
      <LinkButton label="LOGIN" to="/login" />
      <Divisor />
      <LinkButton label="REGISTER" to="/signup" />
    </div>
  )
}

export default Welcome
