import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Input, Stack } from '@chakra-ui/react'
import styles from './addInstructorForm.module.scss'

type FormValues = {
  name: string
}

const AddInstructorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const handleAddInstructor: SubmitHandler<FormValues> = (data) => {
    console.log('adding instructor')
    console.log(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleAddInstructor)}>
      <Stack spacing={4}>
        <Input
          {...register('name', {
            required: true
          })}
          type="text"
          placeholder="Prénom"
          errorBorderColor="red.300"
        />
        {errors.name && <span>Ce champ est requis</span>}

        <Button bg="" type="submit">
          Ajouter
        </Button>
      </Stack>
    </form>
  )
}

export default AddInstructorForm
