import styles from './competition.module.scss'
import NewRoundModal from 'components/Modal/NewRoundModal'
import { Button, IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getCompetitions } from 'services/competitions.service'
import { Round } from 'types/round.type'
import { CompetitionTable } from 'components/Tables/CompetitionTable'
import { ArrowLeft, ArrowRight } from 'tabler-icons-react'
import { getMonth, getYear } from 'date-fns'

export const Competition = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [competitions, setCompetitions] = useState<Round[]>([])
  const [currentSeason, setCurrentSeason] = useState(getCurrentSeason())

  function getCurrentSeason() {
    const currentDate = new Date()
    const currentYear = getYear(currentDate)
    const currentMonth = getMonth(currentDate) // 0 = Janvier, 11 = Décembre

    // Si le mois est entre janvier (0) et août (7), la saison commence l'année précédente
    if (currentMonth >= 0 && currentMonth <= 7) {
      const startYear = currentYear - 1
      const endYear = currentYear
      return `${startYear}-${endYear}`
    } else {
      // Sinon, la saison commence cette année
      const startYear = currentYear
      const endYear = currentYear + 1
      return `${startYear}-${endYear}`
    }
  }

  function getPreviousSeason(currentSeason: string) {
    const [startYear, endYear] = currentSeason.split('-').map(Number)
    const previousStartYear = startYear - 1
    const previousEndYear = endYear - 1
    return `${previousStartYear}-${previousEndYear}`
  }

  function getNextSeason(currentSeason: string) {
    const [startYear, endYear] = currentSeason.split('-').map(Number)
    const nextStartYear = startYear + 1
    const nextEndYear = endYear + 1
    return `${nextStartYear}-${nextEndYear}`
  }

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
      pictures: round.pictures,
      detailedResults: round.detailedResults
    }))
  }

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const data = await getCompetitions(currentSeason)
        const mappedData = transformToRounds(data)
        setCompetitions(mappedData)
      } catch (error) {
        console.error('Error fetching competitions:', error)
      }
    }

    fetchCompetitions()
  }, [currentSeason])

  const latestSeason = getCurrentSeason() === currentSeason
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
            onClick={() => setCurrentSeason(getPreviousSeason(currentSeason))}
          />
          <h1 className={styles.season}>Saison {currentSeason}</h1>
          {!latestSeason && (
            <IconButton
              aria-label="next season"
              icon={<ArrowRight />}
              marginBlock="0"
              bg="transparent"
              color="#f5e5d1"
              _hover={{ bg: 'transparent', color: 'black' }}
              onClick={() => setCurrentSeason(getNextSeason(currentSeason))}
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
