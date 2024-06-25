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
      <h1>{t('welcome')}</h1>
      <p>Elle vous permet de gérer vos cours, points de concours, etc...</p>
    </div>
  )
}

export default Home
