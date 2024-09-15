import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Footer, NavBar } from '@/components/layout'
import styles from './root-layout.module.scss'

export const RootLayout = () => {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return <Navigate to="/home" />
  }

  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles['container-outlet']}>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
