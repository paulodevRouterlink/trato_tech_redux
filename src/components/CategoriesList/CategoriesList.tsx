import { useNavigate } from 'react-router-dom'
import { useCategories } from '@/hooks/useCategories'
import styles from './styles.module.scss'

export const CategoriesList = () => {
  const navigate = useNavigate()
  const { CATEGORIES } = useCategories()

  return (
    <section className={styles['categories-container']}>
      {CATEGORIES.map(item => (
        <div key={item.id} onClick={() => navigate(`/category/${item.id}`)}>
          <img src={item.thumbnail} alt={item.name} />
          <h1>{item.name}</h1>
        </div>
      ))}
    </section>
  )
}
