import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { MappedRoutes } from '@/routes/routes'
import { ScrollTop } from './components/ScrollTop'
import styles from '@/sass/App/App.module.scss'

export const App = () => (
  <div className={styles.container}>
    <NavBar />

    <div className={styles['container-outlet']}>
      <ScrollTop>
        <MappedRoutes />
      </ScrollTop>
    </div>

    <Footer />
  </div>
)
