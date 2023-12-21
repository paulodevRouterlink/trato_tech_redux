import { Header } from '@/components/Header'
import { TitleWithImage } from '@/components/Header/TitleWithImage'
import { CardProduct } from '@/components/CardProduct'

import styles from './styles.module.scss'
import { useCategories } from '@/hooks/useCategories'

export const Category = () => {
  const { category, items } = useCategories()

  const CategoryHead = {
    title: category!.name,
    description: category!.description,
    image: category!.header,
  }

  return (
    <main>
      <Header props={CategoryHead}>
        <TitleWithImage props={CategoryHead} imageUrl={CategoryHead.image} />
      </Header>

      <section className={styles.items__wrapper}>
        {items?.map(props => <CardProduct key={props.id} card={props} />)}
      </section>
    </main>
  )
}
