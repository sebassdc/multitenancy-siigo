import React from 'react'

import { useStyles } from './styles'

const Divisor = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.divisor}>{children}</div>
}

export default Divisor
