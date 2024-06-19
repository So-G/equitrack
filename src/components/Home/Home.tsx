import { Button, Input, Avatar } from '@chakra-ui/react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name?: string
}

const Home: FC = () => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className="page">
      <Avatar size="md" name="So Gd" src="" bg="turquoise" />
      <h1>{t('welcome')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder={t('enterName')} {...register('name')} />

        <Button colorScheme="teal" type="submit" onClick={() => alert(`hello `)}>
          {t('clickMe')}
        </Button>
      </form>
    </div>
  )
}

export default Home
