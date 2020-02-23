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
          ...(storeInfo.exists ? storeInfo.data() : { userType: 'warehouse' }),
          ...(warehouseInfo.exists ? warehouseInfo.data() : { userType: 'store' }),
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
    console.log('uid: ', uid)
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

export const loginThunk = ({ email, password }) => async dispatch => {
  try {
    dispatch(Auth.authRequest())
    await auth.signInWithEmailAndPassword(email, password)
  } catch (e) {
    dispatch(Auth.authFail(e))
  }
}

export const logoutThunk = () => async dispatch => {
  try {
    dispatch(Auth.authRequest())
    await auth.signOut()
  } catch (e) {
    dispatch(Auth.authFail(e))
  }
}
