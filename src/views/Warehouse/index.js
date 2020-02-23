import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Divisor from '../../components/Divisor'
import ProductsTable from '../../components/ProductsTable'
import AddProductForm from './AddProductForm'
import ReplaceProduct from './ReplaceProductForm'
import AddProvider from './AddProviderForm'
import { useStyles } from './styles'
import { mapStateToProps, mapDispatchToProps } from './store'

const Warehouse = ({ addProvider, addProduct }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1>Warehouse</h1>
      <div className={classes.group}>
        <h3>Add provider</h3>
        <AddProvider addProvider={addProvider} />
        <Divisor />
        <h3>Add product</h3>
        <AddProductForm addProduct={addProduct} />
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

Warehouse.propTypes = {
  addProvider: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Warehouse)
