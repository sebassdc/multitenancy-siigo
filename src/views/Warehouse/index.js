import React from 'react'

import Divisor from '../../components/Divisor'
import ProductsTable from '../../components/ProductsTable'
import AddProductForm from './AddProductForm'
import ReplaceProduct from './ReplaceProductForm'
import AddProvider from './AddProviderForm'
import { useStyles } from './styles'

const Warehouse = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1>Warehouse</h1>
      <div className={classes.group}>
        <h3>Add provider</h3>
        <AddProvider />
        <Divisor />
        <h3>Add product</h3>
        <AddProductForm />
        <Divisor />
        <h3>Products Table</h3>
        <ProductsTable />
        <Divisor />
        <h3>Replace product</h3>
        <ReplaceProduct />
      </div>
    </div>
  )
}

export default Warehouse
