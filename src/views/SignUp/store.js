import { createStructuredSelector } from 'reselect'
import { isUserLoggedIn, isAuthInProgress } from '../../redux/selectors/auth'
import { signupThunk } from '../../redux/thunks/auth'

export const mapStateToProps = createStructuredSelector({
  isAuthInProgress,
  isUserLoggedIn,
})

export const mapDispatchToProps = {
  signup: signupThunk,
}
