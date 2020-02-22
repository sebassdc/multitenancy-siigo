import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export default function FormPropsTextFields() {
  const classes = useStyles()
  const [userType, setUserType] = React.useState('store')
  const [name, setName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [selectedWarehouseId, setSelectedWarehouseId] = React.useState('')
  const [warehouses, setWarehouses] = React.useState([
    {
      value: 'store',
      label: 'Sucursal',
    },
    {
      value: 'warehouse',
      label: 'Bodega',
    },
  ])

  const handleUserType = event => {
    setUserType(event.target.value)
  }

  const handleName = event => {
    setName(event.target.value)
  }

  const handleAddress = event => {
    setAddress(event.target.value)
  }

  const handleSelectedWarehouse = event => {
    setSelectedWarehouseId(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const dataToSend = {
      userType,
      name,
      address,
      selectedWarehouseId,
    }
    console.log('handleSubmit > dataToSend', dataToSend)
  }

  return (
    <div className={classes.container}>
      <h1>Registro</h1>
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          id="select-user-type"
          select
          label="Tipos de usuarios"
          value={userType}
          onChange={handleUserType}
          helperText="Selecciona tipo de usuario"
        >
          {userTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField id="name" onChange={handleName} value={name} required label="Nombre" />
        <TextField id="address" onChange={handleAddress} value={address} label="Dirección" />
        {userType === 'store' && (
          <TextField
            id="select-warehouse"
            select
            label="Bodegas"
            value={selectedWarehouseId}
            onChange={handleSelectedWarehouse}
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
