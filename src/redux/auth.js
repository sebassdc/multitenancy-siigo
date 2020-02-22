import { createReducer, createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  loginRequest: null,
  loginSuccess: ['userInfo', 'isRehidrate'],
  loginFail: ['error'],

  logoutRequest: null,
  logoutSuccess: null,
  logoutFail: ['error'],

  clear: null,
})

export const AuthTypes = Types
export default Creators

const INITIAL_STATE = {
  isAuthInProgress: false,
  isUserLoggedIn: false,
  userInfo: {},
  isRehidrate: false,
  error: '',
}

const fetchRequest = state => ({
  ...state,
  isAuthInProgress: true,
})

const loginSuccess = (state, action) => ({
  ...state,
  userInfo: action.userInfo,
  isAuthInProgress: false,
  isUserLoggedIn: true,
  isRehidrate: Boolean(action.isRehidrate),
})

const loginFail = (state, action) => ({
  ...state,
  error: action.error,
  isAuthInProgress: false,
})

const logoutFail = (state, action) => ({
  ...state,
  error: action.error,
})

const clear = () => INITIAL_STATE

const HANDLERS = {
  [Types.LOGIN_REQUEST]: fetchRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAIL]: loginFail,

  [Types.LOGOUT_REQUEST]: fetchRequest,
  [Types.LOGOUT_SUCCESS]: clear,
  [Types.LOGOUT_FAIL]: logoutFail,

  [Types.CLEAR]: clear,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
