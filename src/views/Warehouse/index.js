import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Divisor from '../../components/Divisor'
import { useStyles } from './styles'

export default function FormPropsTextFields() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1>Warehouse</h1>
      <div className={classes.group}>
        <div className={classes.root}>
          <h3>Add provider</h3>
          <TextField name="provider" onChange={() => {}} value="" label="Provider" />
          <Divisor>
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Divisor>
        </div>
      </div>
    </div>
  )
}
