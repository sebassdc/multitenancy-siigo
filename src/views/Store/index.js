import React from 'react'
import Button from '@material-ui/core/Button'

import Autocomplete from '../../components/Autocomplete'
import Divisor from '../../components/Divisor'
import LinkButton from '../../components/LinkButton'
import ProductsTable from './ProductsTable'
import QueueTable from './QueueTable'
import { useStyles } from './styles'

export default function FormPropsTextFields() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1>Store</h1>
      <div className={classes.group}>
        <h3>Search</h3>
        <div className={classes.root}>
          <Autocomplete />
          <h3>Product List</h3>
          <Divisor>
            <ProductsTable />
          </Divisor>
          <Divisor />
          <Button type="submit" id="submit-button" variant="contained" color="primary">
            Submit
          </Button>
          <Divisor />
          <Button type="submit" id="submit-button" variant="contained" color="primary">
            Clean
          </Button>
        </div>
        <div className={classes.group}>
          <Divisor />
          <h3>Queue</h3>
          <Divisor>
            <QueueTable />
          </Divisor>
          <Divisor>
            <LinkButton label="logout" to="/" />
          </Divisor>
        </div>
      </div>
    </div>
  )
}