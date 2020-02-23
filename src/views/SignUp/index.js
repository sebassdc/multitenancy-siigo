import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik'
import { useStyles } from './styles'
import { mapStateToProps, mapDispatchToProps } from './store'

const userTypes = [
  {
    value: 'store',
    label: 'Sucursal',
  },
  {
    value: 'warehouse',
    label: 'Bodega',
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

const FormPropsTextFields = ({ signup }) => {
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
      <h1>Registro de usuarios</h1>
      <form className={classes.root} onSubmit={formik.handleSubmit} noValidate autoComplete="off">
        <TextField
          id="select-user-type"
          select
          label="Tipos de usuarios"
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
          label="Contraseña"
        />
        <TextField
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
          label="Nombre"
        />
        <TextField
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          label="Dirección"
        />
        {formik.values.userType === 'store' && (
          <TextField
            name="selectedWarehouseId"
            select
            label="Bodegas"
            value={formik.values.selectedWarehouseId}
            onChange={formik.handleChange}
            helperText="Seleccionar una bodega"
          >
            {mockWarehouses.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
        <Button type="submit" id="submit-button" variant="contained" color="primary">
          Registrar
        </Button>
      </form>
    </div>
  )
}

FormPropsTextFields.propTypes = {
  signup: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPropsTextFields)
