import { Button } from '@chakra-ui/react'
import HorseList from 'components/Horses/HorseList'

export const HorseView = () => {
  return (
    <div>
      <h1>VOIR LES CHEVAUX</h1>
      <Button bg="#e06c9f" color="white" onClick={() => alert('adding horse')}>
        ADD HORSE
      </Button>
      <HorseList />
    </div>
  )
}
