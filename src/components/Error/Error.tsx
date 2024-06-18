import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Error: FC = () => {
  const { t } = useTranslation()
  return <div>{t('error.message')}</div>
}

export default Error
