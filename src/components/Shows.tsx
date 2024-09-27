import { getCompetitions } from 'services/competitions.service'
import { CompetitionTable } from './Table24/CompetitionTable'
import { useEffect, useState } from 'react'
import { Round } from 'types/round.type'
import { Button } from '@chakra-ui/react'
import styles from './shows.module.scss'

const Shows = () => {
  const [competitions, setCompetitions] = useState<Round[]>([]) // Utilise l'état pour stocker les données

  const transformToRounds = (docs: any[]): Round[] => {
    return docs.map((doc) => ({
      id: doc.id,
      date: doc.date,
      location: doc.location || '',
      horse: doc.horse || '',
      ranking: doc.ranking || 'unknown',
      points: doc.points || 'unknown',
      category: doc.category || ''
    }))
  }

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const data = await getCompetitions() // Récupère les compétitions
        const mappedData = transformToRounds(data)
        setCompetitions(mappedData) // Met à jour l'état avec les données
      } catch (error) {
        console.error('Error fetching competitions:', error)
      }
    }

    fetchCompetitions()
  }, [])

  return (
    <div>
      <Button bg="black" color="white" onClick={() => console.log('add round')}>
        Ajouter une compétition
      </Button>
      <CompetitionTable data={competitions} />
      <p className={styles.total}>Total Points : </p>
    </div>
  )
}

export default Shows
