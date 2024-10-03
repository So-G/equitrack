import { Button } from '@chakra-ui/react'
import React, { FC, PropsWithChildren } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/routes.enum'
import styles from './admin.module.scss'

const Admin: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div className={styles.adminPage}>
      <Button
        bg="#e06c9f"
        color="white"
        onClick={() => {
          navigate(RoutePath.ADMIN_HORSES)
        }}
      >
        Voir tous les chevaux
      </Button>
      <Button
        bg="#e06c9f"
        color="white"
        onClick={() => {
          navigate(RoutePath.ADMIN_INSTRUCTORS)
        }}
      >
        Voir tous les instructeurs
      </Button>
      {children}
      <Outlet />
    </div>
  )
}

export default Admin
