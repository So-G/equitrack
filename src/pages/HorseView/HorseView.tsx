import { Button } from '@chakra-ui/react'
import HorseList from 'components/Horses/HorseList'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/routes.enum'
import styles from './horseview.module.scss'
const HorseView = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.horsesPage}>
      <h1>VOIR LES CHEVAUX</h1>
      <Button bg="#e06c9f" color="white" onClick={() => navigate(RoutePath.ADMIN_NEW_HORSE)}>
        ADD HORSE
      </Button>
      <HorseList />
    </div>
  )
}

export default HorseView
