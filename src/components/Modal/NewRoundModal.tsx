import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  Stack,
  Select
} from '@chakra-ui/react'
import { FC, SetStateAction } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import './newRoundModal.scss'
import { addRound } from 'services/competitions.service'
import { Round } from 'types/round.type'
import { useHorses } from 'context/horse.context'

interface NewRoundModalProps {
  isOpen: boolean
  onClose: () => void
  setCompetitions: (value: SetStateAction<Round[]>) => void
}

type FormValues = {
  location: string
  date: string
  horse: string
  category: string
  points: number
  ranking: string
  result: string
  season: string
}

const NewRoundModal: FC<NewRoundModalProps> = ({ isOpen, onClose, setCompetitions }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const { horses } = useHorses()

  const handleAddRound: SubmitHandler<FormValues> = async (data) => {
    try {
      const newRound: Round = {
        date: data.date,
        location: data.location,
        horse: data.horse,
        category: data.category,
        points: data.points,
        ranking: data.ranking || '-',
        result: data.result,
        season: data.season
      }
      await addRound(newRound)
      setCompetitions((prevRounds) => [...prevRounds, newRound])

      onClose()
    } catch (error) {
      console.error('Error adding round:', error)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent background="#ffdbda">
        <ModalHeader>Ajouter une épreuve</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(handleAddRound)}>
            <Stack spacing={4}>
              <Input
                {...register('location', {
                  required: true
                })}
                background="#F5EFE6"
                placeholder="Lieu"
                errorBorderColor="red.300"
                size="md"
              />
              {errors.location && <span>Ce champ est requis</span>}
              <Input type="date" placeholder="Date" {...register('date')} />

              <Select {...register('horse')} placeholder="Cheval" background="#F5EFE6">
                {horses.map((horse) => (
                  <option key={horse.id} value={horse.name}>
                    {horse.name}
                  </option>
                ))}
              </Select>
              <Input
                {...register('category', {
                  required: true
                })}
                background="#F5EFE6"
                placeholder="Epreuve"
                errorBorderColor="red.300"
                size="md"
              />
              <Input
                background="#F5EFE6"
                type="number"
                {...register('points', {})}
                placeholder="Points"
              />
              <Input background="#F5EFE6" {...register('ranking', {})} placeholder="Classement" />
              <Input background="#F5EFE6" {...register('result', {})} placeholder="Fautes" />
              <Input background="#F5EFE6" {...register('season', {})} placeholder="Saison" />
            </Stack>
            <ModalFooter>
              <Button bg="#889696" color="white" mr={3} type="submit">
                Ajouter un tour
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NewRoundModal
