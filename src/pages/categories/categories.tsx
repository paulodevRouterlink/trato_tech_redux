import { CategoriesList, Header } from '@/components/layout'
import styles from './categories.module.scss'

export const Categories = () => (
  <section>
    <Header.Root>
      <Header.Title props={{ title: 'Categorias' }} />
    </Header.Root>

    <div className={styles.categories_wrapper}>
      <CategoriesList />
    </div>
  </section>
)
