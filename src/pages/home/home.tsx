import { Header } from '@/components/layout'
import { Loader } from '@/components/ui'
import { useHome } from './useHome'
import Clock from '@/assets/inicial.png'
import styles from './home.module.scss'

export const Home = () => {
  const { navigate, categories } = useHome()

  return (
    <main>
      <Header.Root>
        <Header.Banner
          title="Classificados Tech"
          description="Compre, venda, anuncie, troque diversos tipos de produtos e serviços da área de tecnologia!"
          imageUrl={Clock}
          style={{ paddingBottom: '25rem' }}
        />
      </Header.Root>

      <section className={styles.home}>
        <div className={styles['home-title']}>
          <h1>Categorias</h1>
        </div>

        <div className={styles.load__categories}>
          {categories.length === 0 && <Loader label="Carregando Categorias" />}
        </div>

        <section className={styles['categories-container']}>
          {categories.map((item) => (
            <div key={item.id} onClick={() => navigate(`/category/${item.id}`)}>
              <img src={item.thumbnail} alt={item.name} />
              <h1>{item.name}</h1>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}
