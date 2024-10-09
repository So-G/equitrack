import { Button } from '@chakra-ui/react'
import styles from './horse.module.scss'
import { useEffect, useState } from 'react'
import { getHorses } from 'services/horses.service'
import { HorseTable } from 'components/Horses/HorseTable'
import { Horse } from 'types/horse.type'
import { NewHorseModal } from 'components/Modal/NewHorseModal'

export const HorsePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [horses, setHorses] = useState<Horse[]>([])

  const horsesMapper = (horses: any[]): Horse[] => {
    return horses.map((horse) => ({
      id: horse.id,
      name: horse.name,
      color: horse.color,
      breed: horse.breed,
      dob: horse.dob,
      rating: horse.rating || 0
    }))
  }

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const data = await getHorses()
        const mappedData = horsesMapper(data)
        console.log('🏇🏻:', data)
        setHorses(mappedData)
      } catch (error) {
        console.error('Error fetching competitions:', error)
      }
    }

    fetchHorses()
  }, [])

  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={styles.horsesPage}>
      <h1>Les 🏇🏻</h1>
      <Button bg="#e06c9f" color="white" onClick={() => setIsModalOpen(true)}>
        Ajouter un 🦄✨
      </Button>
      <HorseTable data={horses} />
      <NewHorseModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
