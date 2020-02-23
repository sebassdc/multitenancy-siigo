import { createStructuredSelector } from 'reselect'
import { initAuthListenerThunk } from '../redux/thunks/auth'
// import { isUserLoggedIn, isAuthInProgress } from '../redux/selectors/auth'

export const mapStateToProps = createStructuredSelector({})

export const mapDispatchToProps = {
  initAuthListener: initAuthListenerThunk,
}
