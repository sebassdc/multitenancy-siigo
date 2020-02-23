import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik'

import LinkButton from '../../components/LinkButton'
import Divisor from '../../components/Divisor'
import { useStyles } from './styles'
import { mapStateToProps, mapDispatchToProps } from './store'

const userTypes = [
  {
    value: 'store',
    label: 'Store',
  },
  {
    value: 'warehouse',
    label: 'Warehouse',
  },
]

const mockWarehouses = [
  {
    value: 'aakdsnfkjasdhfklhads',
    label: 'Bodega 1',
  },
  {
    value: 'kasdlkfjasdlkjflkadsj',
    label: 'Bodega 2',
  },
]

const SignUp = ({ signup }) => {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      userType: 'store',
      email: '',
      password: '',
      name: '',
      address: '',
      selectedWarehouseId: '',
    },
    onSubmit: signup,
  })

  return (
    <div className={classes.container}>
      <h1>Users Sign Up</h1>
      <form className={classes.root} onSubmit={formik.handleSubmit} noValidate autoComplete="off">
        <TextField
          id="select-user-type"
          select
          label="User Types"
          name="userType"
          value={formik.values.userType}
          onChange={formik.handleChange}
          helperText="Selecciona tipo de usuario"
        >
          {userTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
          label="E-mail"
        />
        <TextField
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
          label="Password"
        />
        <TextField
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
          label="Name"
        />
        <TextField
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          label="Address"
        />
        {formik.values.userType === 'store' && (
          <TextField
            name="selectedWarehouseId"
            select
            label="Warehouses"
            value={formik.values.selectedWarehouseId}
            onChange={formik.handleChange}
            helperText="Select a warehouse"
          >
            {mockWarehouses.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
        <Button type="submit" id="submit-button" variant="contained" color="primary">
          Sign up
        </Button>
        <Divisor />
        <LinkButton label="Back" to="/" />
      </form>
    </div>
  )
}

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
