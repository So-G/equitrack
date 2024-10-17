import type { FC, PropsWithChildren } from 'react'

import styles from './layout.module.scss'
import AppNavbar from 'components/AppNavbar/AppNavbar'
import { Button } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { RoutePath } from 'routes/routes.enum'
import { useNavigate } from 'react-router-dom'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()

  const signOutFromApp = async () => {
    await signOut(auth)
    console.log('Utilisateur déconnecté 🔌')
    navigate(RoutePath.SIGNIN)
  }

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.appbar}>
          <AppNavbar />
          <div className={styles.appbar__center}></div>
          <div className={styles.appbar__right}>
            <Button bg="#e06c9f" color="white" onClick={signOutFromApp}>
              Déconnexion
            </Button>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
