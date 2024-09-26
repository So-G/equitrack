import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Input, Stack } from '@chakra-ui/react'
import styles from './addHorseForm.module.scss'

type FormValues = {
  name: string
  color: string
  age: number
}

const AddHorseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const handleAddHorse: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
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
          {...register('age', {
            required: true
          })}
          type="number"
          placeholder="Age"
          errorBorderColor="red.300"
          size="md"
        />
        <Button type="submit" bg="black">
          Add
        </Button>
      </Stack>
    </form>
  )
}

export default AddHorseForm
