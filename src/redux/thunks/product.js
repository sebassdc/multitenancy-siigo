import Product from '../product'
import { firestore } from '../../utils/firebase'

export const addProductThunk = ({ name, price, providerId }) => async dispatch => {
  try {
    dispatch(Product.addProductRequest())
    const { id } = firestore.collection('product').doc()
    await firestore
      .collection('product')
      .doc(id)
      .set({ id, name, price, providerId })
    dispatch(Product.addProductSuccess())
  } catch (e) {
    dispatch(Product.addProductFail(e))
  }
}
