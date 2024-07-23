import React, { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/routes.enum'
import { Tabs, TabList, Tab } from '@chakra-ui/react'

const AppNavbar: FC = () => {
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
            onClick={() => navigate(RoutePath.CLASSES)}
          >
            Cours
          </Tab>
          <Tab
            _selected={{ color: '#ffdbda', bg: '#db7f8e' }}
            onClick={() => navigate(RoutePath.COMPETITION)}
          >
            Concours
          </Tab>
          <Tab
            _selected={{ color: '#ffdbda', bg: '#db7f8e' }}
            onClick={() => navigate(RoutePath.ADMIN)}
          >
            Admin
          </Tab>
        </TabList>
      </Tabs>
    </div>
  )
}

export default AppNavbar
