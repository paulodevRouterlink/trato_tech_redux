import { useLocation, useParams } from 'react-router-dom'
import { useEditItems } from '@/hooks/useEditItems'
import { Header } from '@/components/Header'
import { Form } from './components/Form'

import styles from './styles.module.scss'

export const Advertise = () => {
  const params = useParams()
  const location = useLocation()
  const { product: item } = useEditItems()
  const path =
    location.pathname === `/category/${item?.category}/edit/${params.id}`

  console.log('PATH ==>', path)

  return (
    <main>
      {params.id ? (
        <Header props={{ title: 'Editar Item', description: '' }} />
      ) : (
        <Header
          props={{
            title: 'Anuncie aqui!',
            description: 'Anuncie seu produto no melhor site do Brasil!',
          }}
        />
      )}

      {params.id && (
        <div className={styles.image}>
          <img src={item?.photoUrl} alt={item?.title} />
        </div>
      )}

      <section className={styles['form-wrapper']}>
        <Form />
      </section>
    </main>
  )
}
