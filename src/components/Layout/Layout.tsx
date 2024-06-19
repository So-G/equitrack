import type { FC, PropsWithChildren } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import styles from './layout.module.scss'

interface LayoutProps extends PropsWithChildren {
  fullWidth?: boolean
}

const Layout: FC<LayoutProps> = ({ children, fullWidth = false }) => {
  const { t } = useTranslation()

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
          {/* <div className={styles.appbar__left}>
            <Button
              variant="secondary"
              size="md"
              className="onlyMobile"
              icon={<MenuBurgerIcon />}
              onClick={toggleSidebar}
            >
              {t('layout.btn_menu')}
            </Button>
          </div> */}
          <div className={styles.appbar__center}></div>
          {/* <div className={styles.appbar__right}>
            {!isMobile && <CompanyButton onClick={() => setIsCompanyModalOpen(true)} />}
            <ButtonIcon
              aria-label="profile"
              icon={<PersonIcon />}
              size="sm"
              variant="rounded"
              state="info"
              onClick={toggleProfileModal}
              onKeyDown={toggleProfileModal}
            />
          </div> */}
        </div>
        <main>{children}</main>
      </div>
      {/* <ProfileModal open={isProfileModalOpen} onClose={toggleProfileModal} isMobile={isMobile} /> */}
    </div>
  )
}

export default Layout
