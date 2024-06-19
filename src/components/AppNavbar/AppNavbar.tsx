import React, { FC, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/routes.enum'

const AppNavbar: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return <div className="navbar">Navigation</div>
}

export default AppNavbar
