import { Button } from '@chakra-ui/react'
import styles from './horse.module.scss'
import { useEffect, useState } from 'react'
import { addHorse, getHorses } from 'services/horses.service'
import { HorseTable } from 'components/Tables/HorseTable'
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
      rating: horse.rating
    }))
  }

  const fetchHorses = async () => {
    const fetchedHorses = await getHorses() // Remplace par ta fonction pour récupérer les chevaux
    setHorses(horsesMapper(fetchedHorses))
  }

  useEffect(() => {
    fetchHorses()
  }, [])

  const handleAddHorse = async (newHorse: Horse) => {
    try {
      await addHorse(newHorse)
      setHorses((prevHorses) => [...prevHorses, newHorse])
    } catch (error) {
      console.error("Erreur lors de l'ajout du cheval:", error)
    }
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={styles.horsesPage}>
      <h1>Les 🏇🏻</h1>
      <Button bg="#e06c9f" color="white" onClick={() => setIsModalOpen(true)}>
        Ajouter un 🦄✨
      </Button>
      <HorseTable data={horses} setData={setHorses} />
      <NewHorseModal isOpen={isModalOpen} onClose={closeModal} onAddHorse={handleAddHorse} />
    </div>
  )
}
