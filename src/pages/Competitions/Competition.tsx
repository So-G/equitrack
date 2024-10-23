import styles from './competition.module.scss'
import NewRoundModal from 'components/Modal/NewRoundModal'
import { Button, IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getCompetitions } from 'services/competitions.service'
import { Round } from 'types/round.type'
import { CompetitionTable } from 'components/Tables/CompetitionTable'
import { ArrowLeft, ArrowRight } from 'tabler-icons-react'

export const Competition = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [competitions, setCompetitions] = useState<Round[]>([])

  const closeModal = () => setIsModalOpen(false)
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
      season: round.season || '',
      participants: round.participants || '',
      quarter: round.quarter,
      pictures: round.pictures
    }))
  }

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const data = await getCompetitions()
        const mappedData = transformToRounds(data)
        setCompetitions(mappedData)
      } catch (error) {
        console.error('Error fetching competitions:', error)
      }
    }

    fetchCompetitions()
  }, [])
  const getSeason = competitions[0]?.season
  const currentSeason = competitions.filter((round) => round.season === getSeason)
  const totalPoints = competitions.reduce((acc, round) => acc + round.points, 0)

  return (
    <div className={styles.competitionPage}>
      <div className={styles.content}>
        <div className={styles.title}>
          <IconButton
            aria-label="previous season"
            icon={<ArrowLeft />}
            marginBlock="0"
            bg="transparent"
            color="#f5e5d1"
            _hover={{ bg: 'transparent', color: 'black' }}
            onClick={() => console.log('go to previous season')}
          />
          <h1 className={styles.season}>Saison {getSeason}</h1>
          {!currentSeason && (
            <IconButton
              aria-label="next season"
              icon={<ArrowRight />}
              marginBlock="0"
              bg="transparent"
              color="#f5e5d1"
              _hover={{ bg: 'transparent', color: 'black' }}
            />
          )}
        </div>
        <Button
          bg="black"
          color="white"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          Ajouter une compétition
        </Button>
        <CompetitionTable data={competitions} setData={setCompetitions} />
        <p className={styles.total}>Total Points : {totalPoints} </p>{' '}
        <NewRoundModal
          isOpen={isModalOpen}
          onClose={closeModal}
          setCompetitions={setCompetitions}
        />
      </div>
    </div>
  )
}
