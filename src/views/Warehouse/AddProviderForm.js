import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useFormik } from 'formik'

import Divisor from '../../components/Divisor'
import { useStyles } from './styles'

const AddProvider = ({ addProvider }) => {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: addProvider,
  })

  return (
    <form className={classes.root} onSubmit={formik.handleSubmit} noValidate autoComplete="off">
      <TextField
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        label="Provider"
      />
      <Divisor>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Divisor>
    </form>
  )
}

AddProvider.propTypes = {
  addProvider: PropTypes.func.isRequired,
}

export default AddProvider
