import React, { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/routes.enum'
import { Tabs, TabList, Tab, Button } from '@chakra-ui/react'
import './appNavbar.scss'
const AppNavbar: FC = () => {
  const navigate = useNavigate()

  const signOut = () => {
    console.log('Déconnexion')
    navigate(RoutePath.SIGNIN)
  }

  return (
    <div className="navbar">
      <Tabs variant="unstyled">
        <TabList>
          <Tab
            className="menu-tabs"
            _selected={{ color: '#ffdbda', bg: '#e06c9f' }}
            onClick={() => navigate(RoutePath.HOME)}
          >
            Home
          </Tab>
          <Tab
            className="menu-tabs"
            _selected={{ color: '#ffdbda', bg: '#e06c9f' }}
            onClick={() => navigate(RoutePath.CLASSES)}
          >
            Cours
          </Tab>
          <Tab
            className="menu-tabs"
            _selected={{ color: '#ffdbda', bg: '#e06c9f' }}
            onClick={() => navigate(RoutePath.COMPETITION)}
          >
            Concours
          </Tab>
          <Tab
            className="menu-tabs"
            _selected={{ color: '#ffdbda', bg: '#e06c9f' }}
            onClick={() => navigate(RoutePath.ADMIN)}
          >
            Admin
          </Tab>
          <Button bg="#e06c9f" color="white" onClick={signOut}>
            Déconnexion
          </Button>
        </TabList>
      </Tabs>
    </div>
  )
}

export default AppNavbar
