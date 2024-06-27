import React, { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './error.module.scss'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'routes/routes.enum'

const Error: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className={styles.error}>
      <div className={styles.error__content}>
        <p>{t('error.message')}</p>
        <Button bg="#889696" onClick={() => navigate(RoutePath.HOME)}>
          Revenir à l'accueil
        </Button>
      </div>
    </div>
  )
}

export default Error
