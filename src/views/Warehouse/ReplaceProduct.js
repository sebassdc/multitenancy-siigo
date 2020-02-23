import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { useFormik } from 'formik'

import Divisor from '../../components/Divisor'
import { useStyles } from './styles'

const mockProducts = [
  {
    value: 'aakdsnfkjasdhfklhads',
    label: 'Chicken',
  },
  {
    value: 'kasdlkfjasdlkjflkadsj',
    label: 'TV',
  },
]

const ReplaceProduct = () => {
  const classes = useStyles()

  const formikAddProduct = useFormik({
    initialValues: {
      productId: '',
      stock: 1,
    },
    replaceProduct: e => console.log('e', e),
  })

  return (
    <form
      className={classes.root}
      onSubmit={formikAddProduct.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        name="productId"
        select
        label="Product"
        value={formikAddProduct.values.selectedWarehouseId}
        onChange={formikAddProduct.handleChange}
        helperText="Select a product"
      >
        {mockProducts.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        name="stock"
        type="number"
        onChange={formikAddProduct.handleChange}
        value={formikAddProduct.values.stock}
        label="Stock"
      />
      <Divisor>
        <Button type="submit" variant="contained" color="primary">
          Replace
        </Button>
      </Divisor>
    </form>
  )
}

export default ReplaceProduct
