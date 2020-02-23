import { createReducer, createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  authRequest: null,

  authSuccess: ['userInfo'],
  authFail: ['error'],

  logoutSuccess: null,

  clear: null,
})

export const AuthTypes = Types
export default Creators

const INITIAL_STATE = {
  isAuthInProgress: false,
  userInfo: {},
  error: '',
}

const fetchRequest = state => ({
  ...state,
  isAuthInProgress: true,
})

const authSuccess = (state, action) => ({
  ...state,
  userInfo: action.userInfo,
  isAuthInProgress: false,
})

const authFail = (state, action) => ({
  ...state,
  error: action.error,
  isAuthInProgress: false,
})

const clear = () => INITIAL_STATE

const HANDLERS = {
  [Types.AUTH_REQUEST]: fetchRequest,

  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAIL]: authFail,

  [Types.LOGOUT_SUCCESS]: clear,

  [Types.CLEAR]: clear,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
