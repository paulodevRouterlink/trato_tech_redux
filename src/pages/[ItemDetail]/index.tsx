import { useParams } from 'react-router-dom'
import { Form } from '@/components/Form'
import { Header } from '@/components/Header'
import { useEditItems } from '@/hooks/useEditItems'

import styles from './styles.module.scss'

export const ItemDetail = () => {
  const product = useEditItems()
  const params = useParams()

  console.log('Params ==> ', params.id)
  console.log('PRODUTOS iNFO ==> ', product)

  const HeadingProps = {
    title: product?.title,
    description: product?.description,
  }

  return (
    <div>
      <Header props={HeadingProps} />

      <div className={styles.image}>
        <img src={product?.photoUrl} alt={product?.title} />
      </div>

      <Form />
    </div>
  )
}
