import { CalendarIcon } from '@chakra-ui/icons'
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
  Select,
  Stack
} from '@chakra-ui/react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

const NewClassModal = () => {
  const { isOpen, onClose } = useDisclosure()
  const [startDate, setStartDate] = useState<Date | null>(new Date())

  return (
    <Modal isOpen={false} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          <form>
            <Stack spacing={4}>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                icon={<CalendarIcon />}
              />
              <Input placeholder="Date" />
              <Input placeholder="Heure" />
              <Select placeholder="Cheval"></Select>
              <Select placeholder="Instructeur"></Select>
              <Select placeholder="Discipline"></Select>
            </Stack>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewClassModal
