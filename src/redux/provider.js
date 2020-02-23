import { createReducer, createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  addProviderRequest: null,
  addProviderSuccess: null,
  addProviderFail: null,

  clear: null,
})

export const AuthTypes = Types
export default Creators

const INITIAL_STATE = {
  loading: false,
  providers: [],
  error: '',
}

const fetchRequest = state => ({
  ...state,
  loading: true,
})

const addProviderSuccess = state => ({
  ...state,
  loading: false,
})

const addProviderFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false,
})

const clear = () => INITIAL_STATE

const HANDLERS = {
  [Types.ADD_PROVIDER_REQUEST]: fetchRequest,
  [Types.ADD_PROVIDER_SUCCESS]: addProviderSuccess,
  [Types.ADD_PROVIDER_FAIL]: addProviderFail,

  [Types.CLEAR]: clear,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
