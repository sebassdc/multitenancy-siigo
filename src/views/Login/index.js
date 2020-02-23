import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik'

import LinkButton from '../../components/LinkButton'
import Divisor from '../../components/Divisor'
import { useStyles } from './styles'
import useAuthRedirect from '../../utils/useAuthRedirect'
import { mapStateToProps, mapDispatchToProps } from './store'

const Login = ({ login }) => {
  useAuthRedirect()
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: login,
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
        <Divisor />
        <LinkButton label="Back" to="/" />
      </form>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
