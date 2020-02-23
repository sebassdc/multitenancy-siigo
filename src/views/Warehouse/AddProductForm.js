import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { useFormik } from 'formik'

import Divisor from '../../components/Divisor'
import { useStyles } from './styles'

const mockProviders = [
  {
    value: 'aakdsnfkjasdhfklhads',
    label: 'Provider 1',
  },
  {
    value: 'kasdlkfjasdlkjflkadsj',
    label: 'Provider 2',
  },
]

const AddProductForm = ({ addProduct }) => {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      name: '',
      price: 100,
      providerId: '',
    },
    onSubmit: addProduct,
  })

  return (
    <form className={classes.root} onSubmit={formik.handleSubmit} noValidate autoComplete="off">
      <TextField
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        label="Name"
      />
      <TextField
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
        label="Price"
      />
      <TextField
        name="providerId"
        select
        label="Provider"
        value={formik.values.selectedWarehouseId}
        onChange={formik.handleChange}
        helperText="Select a provider"
      >
        {mockProviders.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Divisor>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Divisor>
    </form>
  )
}

AddProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
}

export default AddProductForm
