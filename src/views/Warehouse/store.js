import { createStructuredSelector } from 'reselect'
// import { isUserLoggedIn, isAuthInProgress } from '../../redux/selectors/auth'
import { addProviderThunk } from '../../redux/thunks/provider'
import { addProductThunk } from '../../redux/thunks/product'

export const mapStateToProps = createStructuredSelector({})

export const mapDispatchToProps = {
  addProvider: addProviderThunk,
  addProduct: addProductThunk,
}
