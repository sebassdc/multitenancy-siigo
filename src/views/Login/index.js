import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik'
import { useStyles } from './styles'

export default function FormPropsTextFields() {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log('handleSubmit > dataToSend', JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className={classes.container}>
      <h1>Login</h1>
      <form className={classes.root} onSubmit={formik.handleSubmit} noValidate autoComplete="off">
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
        <Button type="submit" id="submit-button" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  )
}
