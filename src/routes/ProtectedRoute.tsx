import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user) // Set true if user exists, false if null
    })

    return () => unsubscribe()
  }, [])

  if (isAuth === null) {
    // Optionally show a loading spinner while checking auth
    return <div>Loading...</div>
  }

  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />
}

export default ProtectedRoute
