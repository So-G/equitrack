import Shows from 'components/Shows'
import styles from './competition.module.scss'

function Competition() {
  return (
    <div className={styles.competitionPage}>
      <h1>Competition</h1>
      <Shows />
    </div>
  )
}

export default Competition
