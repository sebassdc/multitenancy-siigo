import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import { useStyles } from './styles'

const LinkButton = ({ label, to }) => {
  const classes = useStyles()
  return (
    <Link className={classes.linkStyle} to={to}>
      <Button className={classes.root} variant="contained" color="primary">
        {label}
      </Button>
    </Link>
  )
}

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default LinkButton
