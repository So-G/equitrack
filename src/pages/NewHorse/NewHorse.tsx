import AddHorseForm from 'components/Horses/AddHorseForm'
import styles from './newHorse.module.scss'

const NewHorse = () => {
  return (
    <div className={styles.newHorsePage}>
      <h1>Ajouter des chevaux</h1>
      <AddHorseForm />
    </div>
  )
}

export default NewHorse
