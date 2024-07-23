import { useForm } from 'react-hook-form'
import { Button, Input, Stack } from '@chakra-ui/react'
import styles from './addHorseForm.module.scss'

const AddHorseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleAddHorse = () => {
    console.log('adding horse')
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleAddHorse}>
        <Stack spacing={4}>
          <Input
            {...register('name', {
              required: true
            })}
            type="text"
            placeholder="Nom du cheval"
          />
          {errors.name && <span>Ce champ est requis</span>}
          <Input
            {...register('color', {
              required: true
            })}
            type="text"
            placeholder="Couleur"
          />
          <Input
            {...register('age', {
              required: true
            })}
            type="number"
            placeholder="Age"
          />
        </Stack>
        <Button type="submit">Ajouter</Button>
      </form>
    </div>
  )
}

export default AddHorseForm
