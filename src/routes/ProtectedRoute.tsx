import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import Loading from 'components/Loading/Loading'

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user) // Set true if user exists, false if null
    })

    return () => unsubscribe()
  }, [])

  if (isAuth === null) {
    return <Loading />
  }

  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />
}

export default ProtectedRoute
