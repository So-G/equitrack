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

interface NewHorseModalProps {
  isOpen: boolean
  onClose: () => void
  onAddHorse: (horse: Horse) => void
}

type FormValues = {
  name: string
  color: string
  dob?: string
  breed?: string
  rating?: number
}

export const NewHorseModal: FC<NewHorseModalProps> = ({ isOpen, onClose, onAddHorse }) => {
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
        dob: data.dob,
        breed: data.breed,
        ...(data.rating !== undefined && { rating: data.rating })
      }
      await onAddHorse(newHorse)
      onClose()
    } catch (error) {
      console.error('🐴 Error adding horse:', error)
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
                {...register('dob')}
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
