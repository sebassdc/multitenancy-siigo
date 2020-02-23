import { createReducer, createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  addProductRequest: null,
  addProductSuccess: null,
  addProductFail: null,

  clear: null,
})

export default Creators

const INITIAL_STATE = {
  loading: false,
  products: [],
  error: '',
}

const fetchRequest = state => ({
  ...state,
  loading: true,
})

const addProductSuccess = state => ({
  ...state,
  loading: false,
})

const addProductFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false,
})

const clear = () => INITIAL_STATE

const HANDLERS = {
  [Types.ADD_PRODUCT_REQUEST]: fetchRequest,
  [Types.ADD_PRODUCT_SUCCESS]: addProductSuccess,
  [Types.ADD_PRODUCT_FAIL]: addProductFail,

  [Types.CLEAR]: clear,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
