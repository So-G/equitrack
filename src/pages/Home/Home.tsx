import AnimatedBackground from 'components/AnimatedBackgound'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="page">
      <AnimatedBackground />
      <h1>{t('welcome')}</h1>
    </div>
  )
}

export default Home
