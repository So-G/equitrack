import styles from './competition.module.scss'
import NewRoundModal from 'components/Modal/NewRoundModal'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getCompetitions } from 'services/competitions.service'
import { Round } from 'types/round.type'
import { CompetitionTable } from 'components/Tables/CompetitionTable'

export const Competition = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [competitions, setCompetitions] = useState<Round[]>([])
  const transformToRounds = (rounds: any[]): Round[] => {
    return rounds.map((round) => ({
      id: round.id,
      date: round.date,
      location: round.location || '',
      horse: round.horse || '',
      ranking: round.ranking || '',
      points: round.points,
      category: round.category || '',
      result: round.result || '',
      season: round.season || ''
    }))
  }

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const data = await getCompetitions()
        const mappedData = transformToRounds(data)
        setCompetitions(mappedData)
        console.log('Competitions:', mappedData)
      } catch (error) {
        console.error('Error fetching competitions:', error)
      }
    }

    fetchCompetitions()
  }, [])

  const totalPoints = competitions.reduce((acc, round) => acc + round.points, 0)

  return (
    <div className={styles.competitionPage}>
      <div className={styles.content}>
        <h1>Competition</h1>
        <Button
          bg="black"
          color="white"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          Ajouter une compétition
        </Button>
        <CompetitionTable data={competitions} />
        <p className={styles.total}>Total Points : {totalPoints} </p>{' '}
        <NewRoundModal isOpen={isModalOpen} />
      </div>
    </div>
  )
}