import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Input,
  Stack
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormValues = {
  location: string
  date: string
  horse: string
  category: number
  points: number
  ranking: number
}

const NewRoundModal = () => {
  const { isOpen, onClose } = useDisclosure()

  const handleClick = () => {
    console.log('add round')
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const handleAddRound: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ajouter une épreuve</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(handleAddRound)}>
            <Stack spacing={4}>
              <Input
                {...register('location', {
                  required: true
                })}
                placeholder="Lieu"
                errorBorderColor="red.300"
                size="md"
              />
              {errors.location && <span>Ce champ est requis</span>}

              <Input
                {...register('date', {
                  required: true
                })}
                placeholder="Date"
                errorBorderColor="red.300"
                size="md"
              />
              <Input
                {...register('horse', {
                  required: true
                })}
                placeholder="Cheval"
                errorBorderColor="red.300"
                size="md"
              />
              <Input
                {...register('category', {
                  required: true
                })}
                placeholder="Epreuve"
                errorBorderColor="red.300"
                size="md"
              />
              <Input {...register('points', {})} placeholder="Points" />
              <Input {...register('ranking', {})} placeholder="Classement" />
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
