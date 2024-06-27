import type { FC, PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Avatar
} from '@chakra-ui/react'
import { RoutePath } from 'routes/routes.enum'

import styles from './layout.module.scss'
import AppNavbar from 'components/AppNavbar/AppNavbar'

interface LayoutProps extends PropsWithChildren {
  fullWidth?: boolean
}

const Layout: FC<LayoutProps> = ({ children, fullWidth = false }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  if (fullWidth)
    return (
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
    )

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.appbar}>
          <AppNavbar />
          <div className={styles.appbar__center}></div>
          <div className={styles.appbar__right}>
            <Popover placement="bottom" closeOnBlur={false}>
              <PopoverTrigger>
                <Avatar size="md" name="So Gd" bg="#a4c3b2" />
              </PopoverTrigger>
              <PopoverContent color="white" bg="#d5c5c8" borderColor="#d5c5c8">
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                  Manage data
                </PopoverHeader>
                <PopoverArrow bg="#d5c5c8" />
                <PopoverCloseButton />
                <PopoverBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.
                </PopoverBody>
                <PopoverFooter
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  <Button colorScheme="green" onClick={() => navigate(RoutePath.ADMIN)}>
                    Go to your admin page
                  </Button>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
