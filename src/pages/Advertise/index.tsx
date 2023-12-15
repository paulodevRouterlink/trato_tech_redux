import { Header } from '@/components/Header'
import { Form } from './components/Form'

import styles from './styles.module.scss'
import Teste from './components/teste'

export const Advertise = () => {
  return (
    <div>
      <Header
        props={{
          title: 'Anuncie aqui!',
          description: 'Anuncie seu produto no melhor site do Brasil!',
        }}
      />

      <div className={styles['form-wrapper']}>
        <Form />
      </div>

      <Teste />
    </div>
  )
}
