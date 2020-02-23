import { createSelector } from 'reselect'
import R from '../../utils/R'

export const userInfo = ({ auth }) => auth.userInfo
export const authError = ({ auth }) => auth.error
export const isAuthInProgress = ({ auth }) => auth.isAuthInProgress
export const isUserLoggedIn = createSelector(userInfo, R.complement(R.isEmpty))
