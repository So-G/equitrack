import Shows from 'components/Shows'
import styles from './competition.module.scss'
import NewRoundModal from 'components/Modal/NewRoundModal'

function Competition() {
  return (
    <div className={styles.competitionPage}>
      <h1>Competition</h1>
      <Shows />
      <NewRoundModal />
    </div>
  )
}

export default Competition
