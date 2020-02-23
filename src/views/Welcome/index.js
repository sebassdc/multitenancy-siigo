import React from 'react'
import LinkButton from '../../components/LinkButton'
import Divisor from '../../components/Divisor'
import { useStyles } from './styles'
import useAuthRedirect from '../../utils/useAuthRedirect'

const Welcome = () => {
  useAuthRedirect()
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1>Welcome</h1>
      <LinkButton label="LOGIN" to="/login" />
      <Divisor />
      <LinkButton label="SIGN UP" to="/signup" />
    </div>
  )
}

export default Welcome
