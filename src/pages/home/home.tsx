import { CategoriesList, Header } from '@/components/layout'
import { AboutUs } from './components/about-us/about-us'
import Clock from '@/assets/inicial.png'
import styles from './home.module.scss'

export const Home = () => {
  const HeadingProps = {
    title: 'Classificados Tech',
    description: 'Compre diversos tipos de produtos no melhor site do Brasil!',
    imageUrl: Clock,
  }
  return (
    <main>
      <Header.Root>
        <Header.Banner
          props={HeadingProps}
          style={{ paddingBottom: '25rem' }}
        />
      </Header.Root>

      <section className={styles.home}>
        <div className={styles['home-title']}>
          <h1>Categorias</h1>
        </div>

        <CategoriesList />

        <AboutUs />
      </section>
    </main>
  )
}
