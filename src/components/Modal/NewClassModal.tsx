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
import { FC, useEffect, useState } from 'react'
import { Discipline } from 'enums/discipline.enum'
import { getHorses } from 'services/horses.service'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Lesson } from 'types/lesson.type'
import { addClass } from 'services/classes.service'
import { Day } from 'enums/day.enum'
import { Horse } from 'types/horse.type'

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
  const [horses, setHorses] = useState<Horse[]>([])

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const horsesData = await getHorses()

        const mappedHorses: Horse[] = horsesData.map((horse: any) => ({
          id: horse.id, // Assurez-vous que chaque cheval a un id
          name: horse.name,
          color: horse.color,
          dob: horse.dob,
          breed: horse.breed,
          rating: horse.rating || 0 // Valeur par défaut pour rating
        }))

        setHorses(mappedHorses)
      } catch (error) {
        console.error('Erreur lors de la récupération des chevaux :', error)
      }
    }

    fetchHorses() // Appeler la fonction
  }, [])

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
      const createClass = await addClass(newClass)
      console.log('Class created:', createClass)
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
              <Input type="date" placeholder="Date" />
              <Select placeholder="Cheval">
                {horses.map((horse) => (
                  <option key={horse.id} value={horse.id}>
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
          </form>
        </ModalBody>

        <ModalFooter>
          <Button bg="#889696" color="white" mr={3} type="submit">
            Ajouter le cours
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewClassModal
