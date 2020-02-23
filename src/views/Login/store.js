import { createStructuredSelector } from 'reselect'
// import { isUserLoggedIn, isAuthInProgress } from '../../redux/selectors/auth'
import { loginThunk } from '../../redux/thunks/auth'

export const mapStateToProps = createStructuredSelector({})

export const mapDispatchToProps = {
  login: loginThunk,
}
