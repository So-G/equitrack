import type { FC, PropsWithChildren } from 'react'

import styles from './layout.module.scss'
import AppNavbar from 'components/AppNavbar/AppNavbar'

interface LayoutProps extends PropsWithChildren {
  fullWidth?: boolean
}

const Layout: FC<LayoutProps> = ({ children, fullWidth = false }) => {
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
        </div>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
