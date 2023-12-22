import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '@/components/Header'
import { TitleWithImage } from '@/components/Header/TitleWithImage'
import { CardProduct } from '@/components/CardProduct'

import { useCategories } from '@/hooks/useCategories'
import { useAppDispatch } from '@/store/hooks/useRedux'
import { loadOneCategory } from '@/store/reducers/categories'
import styles from './styles.module.scss'

export const Category = () => {
  const { CATEGORY, items } = useCategories()
  const dispatch = useAppDispatch()
  const params = useParams()

  const CategoryHead = {
    title: CATEGORY?.name,
    description: CATEGORY?.description,
    image: CATEGORY?.header,
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const categoryId: any | string = params.id

    if (categoryId) {
      dispatch(loadOneCategory(categoryId))
    }
  }, [dispatch, params])

  return (
    <main>
      <Header props={CategoryHead}>
        <TitleWithImage props={CategoryHead} imageUrl={CategoryHead.image} />
      </Header>

      <section className={styles.items__wrapper}>
        {items?.map((props, index) => (
          <CardProduct key={`${index}${props.id}`} card={props} />
        ))}
      </section>
    </main>
  )
}
