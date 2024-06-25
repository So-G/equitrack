import React, { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { RoutePath } from 'routes/routes.enum'

const Error: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div>
      {t('error.message')}
      <Button colorScheme="#889696" onClick={() => navigate(RoutePath.HOME)}>
        Revenir à l'accueil
      </Button>
    </div>
  )
}

export default Error
