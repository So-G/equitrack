import { CalendarIcon } from '@chakra-ui/icons'
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
  InputGroup,
  InputRightElement,
  IconButton,
  Select
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import DatePicker from 'react-datepicker'
import { SubmitHandler, useForm } from 'react-hook-form'
import './newRoundModal.scss'
import { addRound } from 'services/competitions.service'
import { Round } from 'types/round.type'
import { useHorses } from 'context/horse.context'

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

interface NewRoundModalProps {
  isOpen: boolean
  onClose: () => void
}

const NewRoundModal: FC<NewRoundModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const [startDate, setStartDate] = useState(new Date())

  const { horses } = useHorses()

  const handleAddRound: SubmitHandler<FormValues> = async (data) => {
    try {
      const newRound: Round = {
        id: '',
        date: startDate.toISOString(),
        location: data.location,
        horse: data.horse,
        category: data.category,
        points: data.points,
        ranking: data.ranking,
        result: data.result,
        season: data.season
      }
      await addRound(newRound)
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

              {/* <DatePicker
                calendarStartDay={1}
                dateFormat={'dd/MM/yyyy'}
                popperPlacement="top-end"
                placeholderText="Date"
                selected={startDate}
                onChange={(date) => {
                  if (date) {
                    setStartDate(date)
                  }
                }}
                showPopperArrow={false}
                customInput={
                  <InputGroup>
                    <Input
                      background="#F5EFE6"
                      // style={{}} // Override DatePicker styles
                    />
                    <InputRightElement>
                      <IconButton
                        bg="#5f7470"
                        aria-label="Calendar"
                        size="sm"
                        icon={<CalendarIcon />}
                      />
                    </InputRightElement>
                  </InputGroup>
                }
              /> */}
              <DatePicker
                selected={startDate}
                placeholderText="Date"
                onChange={(date) => {
                  if (date) {
                    setStartDate(date)
                  }
                }}
                customInput={
                  <InputGroup>
                    <Input background="#F5EFE6" />
                    <InputRightElement>
                      <IconButton
                        bg="#5f7470"
                        aria-label="Calendar"
                        size="sm"
                        icon={<CalendarIcon />}
                      />
                    </InputRightElement>
                  </InputGroup>
                }
              />

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
