import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCategories } from '@/hooks/useCategories'
import { useAppDispatch } from '@/store/hooks/useRedux'
import { loadCategories } from '@/store/reducers/categories'
import styles from './styles.module.scss'

export const CategoriesList = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { CATEGORIES } = useCategories()

  useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])

  return (
    <section className={styles['categories-container']}>
      {CATEGORIES.map((item, index) => (
        <div
          key={`${index}${item.id}`}
          onClick={() => navigate(`/category/${item.id}`)}
        >
          <img src={item.thumbnail} alt={item.name} />
          <h1>{item.name}</h1>
        </div>
      ))}
    </section>
  )
}
