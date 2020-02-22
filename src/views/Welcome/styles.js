import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  root: {
    width: '150px',
  },
  linkStyle: { textDecoration: 'none', color: 'white' },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  divisor: {
    margin: '0.34em',
  },
}))
