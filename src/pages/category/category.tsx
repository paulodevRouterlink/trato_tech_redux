import { Header } from '@/components/layout'
import { Loader } from '@/components/ui'
import { CategoryItem } from './components'
import { useCategory } from './useCategory'
import styles from './category.module.scss'

export const Category = () => {
  const { categories, loadCategory, loadProducts } = useCategory()

  if (categories.length === 0) {
    return (
      <Header.Root>
        <div className={styles.load__categories}>
          <Loader label="Carregando Produtos" />
        </div>
      </Header.Root>
    )
  }

  return (
    <main>
      <Header.Root>
        {loadCategory && (
          <Header.Banner
            title={loadCategory?.name}
            description={loadCategory?.description}
            imageUrl={loadCategory?.header}
          />
        )}
      </Header.Root>

      {loadProducts.length === 0 && (
        <div className={styles.load__products}>
          <Loader label="Carregando Produtos" />
        </div>
      )}

      {loadProducts.length > 0 && (
        <section className={styles.items__wrapper}>
          {loadProducts?.map((props, index) => (
            <CategoryItem key={`${index}${props.id}`} item={props} />
          ))}
        </section>
      )}
    </main>
  )
}
