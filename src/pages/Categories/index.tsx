import { CategoriesList } from '@/components/CategoriesList'

import styles from './styles.module.scss'

export const Categories = () => (
  <div className={styles.categories_wrapper}>
    <CategoriesList />
  </div>
)
