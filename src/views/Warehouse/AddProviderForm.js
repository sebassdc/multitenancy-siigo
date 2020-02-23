import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useFormik } from 'formik'

import Divisor from '../../components/Divisor'
import { useStyles } from './styles'

const AddProvider = () => {
  const classes = useStyles()

  const formikAddProduct = useFormik({
    initialValues: {
      provider: '',
    },
    addProvider: e => console.log('e', e),
  })

  return (
    <form
      className={classes.root}
      onSubmit={formikAddProduct.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        name="provider"
        onChange={formikAddProduct.handleChange}
        value={formikAddProduct.values.provider}
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

export default AddProvider
