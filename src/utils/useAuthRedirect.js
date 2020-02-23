import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { userType, isUserLoggedIn } from '../redux/selectors/auth'

const useAuthRedirect = () => {
  const history = useHistory()
  const _userType = useSelector(userType)
  const loggedIn = useSelector(isUserLoggedIn)
  useEffect(() => {
    if (loggedIn) {
      history.push(`/${_userType}`)
    }
  }, [_userType, history, loggedIn])
}

export default useAuthRedirect
