import { ClassTable } from 'components/Tables/ClassTable'
import styles from './class.module.scss'
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import NewClassModal from 'components/Modal/NewClassModal'

export const Class = () => {
  return (
    <div className={styles.tablePage}>
      <div className={styles.content}>
        <Button
          bg="black"
          color="white"
          leftIcon={<AddIcon />}
          onClick={() => console.log('ajouter une ligne')}
        >
          Ajouter un cours
        </Button>
        <h1>2024-2025</h1>
        <ClassTable />
      </div>
      <NewClassModal />
    </div>
  )
}
