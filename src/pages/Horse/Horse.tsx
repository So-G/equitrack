import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/routes.enum'
import styles from './horseview.module.scss'
import { useEffect } from 'react'
import { getHorses } from 'services/horses.service'
import { HorseTable } from 'components/Horses/HorseTable'

export const Horse = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const data = await getHorses()
        console.log('🏇🏻:', data)
      } catch (error) {
        console.error('Error fetching competitions:', error)
      }
    }

    fetchHorses()
  }, [])

  return (
    <div className={styles.horsesPage}>
      <h1>Les 🏇🏻</h1>
      <Button bg="#e06c9f" color="white" onClick={() => navigate(RoutePath.ADMIN_NEW_HORSE)}>
        ADD HORSE
      </Button>
      <HorseTable />
    </div>
  )
}
