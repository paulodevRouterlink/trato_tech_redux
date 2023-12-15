import { useParams } from 'react-router-dom'
import { Header } from '@/components/Header'
import { TitleWithImage } from '@/components/Header/TitleWithImage'
import { useAppSelector } from '@/store/hooks/useSelectRedux'
import { CardProduct } from '@/components/CardProduct'

import styles from './styles.module.scss'
import { StateProps } from '@/store'

export const Category = () => {
  const params = useParams()

  const { categories, items } = useAppSelector((state: StateProps) => {
    const regexp = new RegExp(state.search, 'i')

    return {
      categories: state.categories.find(category => category.id === params.id),
      items: state.items.filter(
        item => item.category === params.id && item.title.match(regexp)
      ),
    }
  })

  const CategoryHead = {
    title: categories!.name,
    description: categories!.description,
    image: categories!.header,
  }

  return (
    <main>
      <Header props={CategoryHead}>
        <TitleWithImage props={CategoryHead} />
      </Header>

      <section className={styles.items__wrapper}>
        {items?.map(props => <CardProduct key={props.id} card={props} />)}
      </section>
    </main>
  )
}
