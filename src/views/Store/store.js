import { createStructuredSelector } from 'reselect'
// import { isUserLoggedIn, isAuthInProgress } from '../../redux/selectors/auth'
import { logoutThunk } from '../../redux/thunks/auth'

export const mapStateToProps = createStructuredSelector({})

export const mapDispatchToProps = {
  logout: logoutThunk,
}
