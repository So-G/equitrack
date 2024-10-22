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
import { FC, SetStateAction } from 'react'
import { Discipline } from 'enums/discipline.enum'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Lesson } from 'types/lesson.type'
import { addLesson } from 'services/lessons.service'
import { useHorses } from 'context/horse.context'

type FormValues = {
  date: string
  hour: string
  discipline: Discipline
  horse: string
  coach: string
  rating: number
}
interface NewLessonModalProps {
  isOpen: boolean
  onClose: () => void
  setLessons: (value: SetStateAction<Lesson[]>) => void
}

const Coaches = ['Aubéry', 'Pierre', 'Alix']

const NewLessonModal: FC<NewLessonModalProps> = ({ isOpen, onClose, setLessons }) => {
  const { register, handleSubmit } = useForm<FormValues>()

  const { horses } = useHorses()

  const handleAddLesson: SubmitHandler<FormValues> = async (data) => {
    try {
      const newLesson: Lesson = {
        date: data.date,
        discipline: data.discipline,
        horse: data.horse,
        coach: data.coach,
        rating: data.rating || 0
      }
      await addLesson(newLesson)
      setLessons((prev) => [...prev, newLesson])
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
          <form onSubmit={handleSubmit(handleAddLesson)}>
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

export default NewLessonModal
