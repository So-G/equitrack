import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  Select,
  Stack
} from '@chakra-ui/react'
import { FC } from 'react'
import { Discipline } from 'enums/discipline.enum'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Lesson } from 'types/lesson.type'
import { addClass } from 'services/classes.service'
import { Day } from 'enums/day.enum'
import { useHorses } from 'context/horse.context'

type FormValues = {
  date: string
  day: Day
  hour: string
  discipline: Discipline
  horse: string
  coach: string
  rating: number
}
interface NewClassModalProps {
  isOpen: boolean
  onClose: () => void
}

const Coaches = ['Aubéry', 'Pierre', 'Alix']

const NewClassModal: FC<NewClassModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const { horses } = useHorses()

  const handleAddClass: SubmitHandler<FormValues> = async (data) => {
    try {
      const newClass: Lesson = {
        date: data.date,
        day: data.day,
        discipline: data.discipline,
        horse: data.horse,
        coach: data.coach,
        rating: data.rating || 0
      }
      await addClass(newClass)
      onClose()
    } catch (error) {
      console.error('Error adding class:', error)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(handleAddClass)}>
            <Stack spacing={4}>
              <Input type="date" placeholder="Date" {...register('date')} />
              <Select {...register('horse')} placeholder="Cheval">
                {horses.map((horse) => (
                  <option key={horse.id} value={horse.name}>
                    {horse.name}
                  </option>
                ))}
              </Select>
              <Select {...register('coach')} placeholder="Coach">
                {Coaches.map((coach) => (
                  <option key={coach} value={coach}>
                    {coach}
                  </option>
                ))}
              </Select>
              <Select {...register('discipline')} placeholder="Discipline">
                {Object.values(Discipline).map((discipline) => (
                  <option key={discipline} value={discipline}>
                    {discipline}
                  </option>
                ))}
              </Select>
            </Stack>
            <ModalFooter>
              <Button bg="#889696" color="white" mr={3} type="submit">
                Ajouter le cours
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NewClassModal
