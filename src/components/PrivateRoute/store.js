import { createStructuredSelector } from 'reselect'
import { isUserLoggedIn } from '../../redux/selectors/auth'

export const mapStateToProps = createStructuredSelector({
  isUserLoggedIn,
})
