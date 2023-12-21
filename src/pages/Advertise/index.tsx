import { Header } from '@/components/Header'
import { Form } from '../../components/Form'

import styles from './styles.module.scss'

export const Advertise = () => (
  <main>
    <Header
      props={{
        title: 'Anuncie aqui!',
        description: 'Anuncie seu produto no melhor site do Brasil!',
      }}
    />

    <section className={styles['form-wrapper']}>
      <Form />
    </section>
  </main>
)
