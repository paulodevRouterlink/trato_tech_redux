import { AboutUs } from './components/AboutUs'
import { CategoriesList } from '@/components/CategoriesList'

import styles from './styles.module.scss'

export const Home = () => (
  <main className={styles.home}>
    <div className={styles['home-title']}>
      <h1>Categorias</h1>
    </div>

    <CategoriesList />

    <AboutUs />
  </main>
)
