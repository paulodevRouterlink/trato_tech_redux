import { Header } from '@/components/layout'
import { FormAdvertise } from './components'
import styles from './advertise.module.scss'

export const Advertise = () => (
  <main>
    <Header.Root>
      <Header.Title
        title="Anuncie aqui!"
        description="Anuncie seu produto no melhor site do Brasil!"
      />
    </Header.Root>

    <section className={styles['form-wrapper']}>
      <FormAdvertise />
    </section>
  </main>
)
