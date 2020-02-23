import Provider from '../provider'
import { firestore } from '../../utils/firebase'

export const addProviderThunk = ({ name }) => async dispatch => {
  try {
    dispatch(Provider.addProviderRequest())
    const { id } = firestore.collection('provider').doc()
    await firestore
      .collection('provider')
      .doc(id)
      .set({ id, name })
    dispatch(Provider.addProviderSuccess())
  } catch (e) {
    dispatch(Provider.addProviderFail(e))
  }
}
