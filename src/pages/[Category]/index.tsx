import { Header } from '@/components/Header'
import { TitleWithImage } from '@/components/Header/TitleWithImage'
import { CardProduct } from '@/components/CardProduct'

import styles from './styles.module.scss'
import { useCategories } from '@/hooks/useCategories'

export const Category = () => {
  const { CATEGORY, items } = useCategories()

  const CategoryHead = {
    title: CATEGORY?.name,
    description: CATEGORY?.description,
    image: CATEGORY?.header,
  }

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
