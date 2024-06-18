import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="h-full w-full flex items-center justify-center">
      <h1>{t('welcome')}</h1>
    </div>
  )
}

export default Home
