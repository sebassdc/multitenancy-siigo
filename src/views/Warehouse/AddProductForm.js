import React from 'react'
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

const AddProductForm = () => {
  const classes = useStyles()

  const formikAddProduct = useFormik({
    initialValues: {
      name: '',
      price: 100,
      stock: 1,
      providerId: '',
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
        name="name"
        onChange={formikAddProduct.handleChange}
        value={formikAddProduct.values.name}
        label="Name"
      />
      <TextField
        name="price"
        type="number"
        onChange={formikAddProduct.handleChange}
        value={formikAddProduct.values.price}
        label="Price"
      />
      <TextField
        name="stock"
        type="number"
        onChange={formikAddProduct.handleChange}
        value={formikAddProduct.values.stock}
        label="Stock"
      />
      <TextField
        name="providerId"
        select
        label="Provider"
        value={formikAddProduct.values.selectedWarehouseId}
        onChange={formikAddProduct.handleChange}
        helperText="Select a warehouse"
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

export default AddProductForm
