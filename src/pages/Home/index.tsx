import { useNavigate } from 'react-router-dom'
import { useCategories } from '@/hooks/useCategories'

import styles from './styles.module.scss'

export const Home = () => {
  const navigate = useNavigate()
  const { CATEGORIES } = useCategories()

  return (
    <main className={styles.categories}>
      <div className={styles['categories-title']}>
        <h1>Categorias</h1>
      </div>

      <section className={styles['categories-container']}>
        {CATEGORIES.map(item => (
          <div key={item.id} onClick={() => navigate(`/category/${item.id}`)}>
            <img src={item.thumbnail} alt={item.name} />
            <h1>{item.name}</h1>
          </div>
        ))}
      </section>
    </main>
  )
}
