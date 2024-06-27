import { Button, Select } from '@chakra-ui/react'
import React, { FC, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/routes.enum'

const Admin: FC = () => {
  const navigate = useNavigate()
  const handleNavigateHorses = () => {
    navigate(RoutePath.ADMIN_HORSES) // Utilisation du chemin absolu
  }

  return (
    <div>
      <h1>Hello Admin</h1>
      <p>Bienvenue dans cet espace vous permettant de gérer vos chevaux, instructeurs, etc...</p>
      <Button bg="#e06c9f" color="white" onClick={handleNavigateHorses}>
        GERER LES CHEVAUX
      </Button>
    </div>
  )
}

export default Admin
