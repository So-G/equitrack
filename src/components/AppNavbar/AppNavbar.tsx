import React, { FC, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Route, useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/routes.enum'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const AppNavbar: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="navbar">
      <Tabs variant="unstyled">
        <TabList>
          <Tab
            _selected={{ color: '#ffdbda', bg: '#db7f8e' }}
            onClick={() => navigate(RoutePath.HOME)}
          >
            Home
          </Tab>
          <Tab
            _selected={{ color: '#ffdbda', bg: '#db7f8e' }}
            onClick={() => navigate(RoutePath.TABLE)}
          >
            Tableau
          </Tab>
          <Tab _selected={{ color: '#ffdbda', bg: '#db7f8e' }}>Three</Tab>
        </TabList>
      </Tabs>
    </div>
  )
}

export default AppNavbar
