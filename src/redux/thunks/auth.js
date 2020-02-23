import Auth from '../auth'
import { auth, firestore } from '../../utils/firebase'

export const initAuthListenerThunk = () => dispatch => {
  auth.onAuthStateChanged(async userInfo => {
    if (userInfo) {
      try {
        const storeInfo = await firestore
          .collection('store')
          .doc(userInfo.uid)
          .get()
        const warehouseInfo = await firestore
          .collection('warehouse')
          .doc(userInfo.uid)
          .get()
        const user = {
          ...userInfo,
          ...(storeInfo.exists ? storeInfo.data() : {}),
          ...(warehouseInfo.exists ? warehouseInfo.data() : {}),
        }
        dispatch(Auth.authSuccess(user))
      } catch (e) {
        dispatch(Auth.authFail(e))
      }
    } else {
      dispatch(Auth.logoutSuccess())
    }
  })
}

export const signupThunk = ({
  userType,
  email,
  password,
  name,
  address,
  selectedWarehouseId,
}) => async dispatch => {
  try {
    dispatch(Auth.authRequest())
    const {
      user: { uid },
    } = await auth.createUserWithEmailAndPassword(email, password)
    await firestore
      .collection(userType)
      .doc(uid)
      .set({
        id: uid,
        email,
        password,
        name,
        address,
        selectedWarehouseId,
      })
  } catch (e) {
    dispatch(Auth.authFail(e))
  }
}

export const loginThunk = (email, password) => async dispatch => {
  try {
    dispatch(Auth.authRequest())
    await auth.signInWithEmailAndPassword(email, password)
  } catch (e) {
    dispatch(Auth.authFail(e))
  }
}
