import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './newHorseModal.module.scss'
import { FC } from 'react'
import { Horse } from 'types/horse.type'
import { addHorse } from 'services/horses.service'
import { Timestamp } from 'firebase/firestore'

interface NewHorseModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormValues = {
  name: string
  color: string
  dob: Date
  breed: string
}

export const NewHorseModal: FC<NewHorseModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const handleAddHorse: SubmitHandler<FormValues> = async (data) => {
    try {
      const newHorse: Horse = {
        name: data.name,
        color: data.color,
        dob: data.dob as unknown as Timestamp,
        rating: 0,
        breed: 'unknown'
      }
      const createRound = await addHorse(newHorse)
      console.log('🐼', createRound)
      onClose()
    } catch (error) {
      console.error('Error adding round:', error)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent background="#ffdbda">
        <ModalHeader>Ajouter un cheval</ModalHeader>
        <ModalBody>
          <form className={styles.form} onSubmit={handleSubmit(handleAddHorse)}>
            <Stack spacing={4}>
              <Input
                {...register('name', {
                  required: true
                })}
                type="text"
                placeholder="Nom du cheval"
                errorBorderColor="red.300"
                size="md"
              />
              {errors.name && <span>Ce champ est requis</span>}
              <Input
                {...register('color', {
                  required: true
                })}
                type="text"
                placeholder="Couleur"
                errorBorderColor="red.300"
                size="md"
              />
              <Input
                {...register('dob', {
                  required: true
                })}
                type="date"
                placeholder="Date de naissance"
                errorBorderColor="red.300"
                size="md"
              />
              <Input
                {...register('breed', {})}
                type="string"
                placeholder="Race"
                errorBorderColor="red.300"
                size="md"
              />
              <ModalFooter>
                <Button type="submit" bg="black" color="white">
                  Ajouter
                </Button>
              </ModalFooter>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
