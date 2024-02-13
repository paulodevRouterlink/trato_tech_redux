import { MappedRoutes } from '@/routes/routes'
import { ScrollTop } from './components'
import { Footer, NavBar } from './components/layout'

import styles from '@/sass/app.module.scss'

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
