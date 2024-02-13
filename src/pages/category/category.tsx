import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCategories } from '@/hooks/useCategories'
import { useAppDispatch } from '@/store/hooks/useRedux'
import { Header } from '@/components/layout'
import { loadOneCategory } from '@/store/actions/actions'
import styles from './category.module.scss'
import { CategoryItem } from './components'

export const Category = () => {
  const { CATEGORY, items } = useCategories()
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    const categoryId = params.id

    dispatch(loadOneCategory(categoryId))
  }, [dispatch, params])

  const CategoryHead = {
    title: CATEGORY?.name,
    description: CATEGORY?.description,
    imageUrl: CATEGORY?.header,
  }

  return (
    <main>
      <Header.Root>
        <Header.Banner props={CategoryHead} />
      </Header.Root>

      <section className={styles.items__wrapper}>
        {items?.map((props, index) => (
          <CategoryItem key={`${index}${props.id}`} item={props} />
        ))}
      </section>
    </main>
  )
}
