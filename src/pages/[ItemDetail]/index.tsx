import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

import { Form } from '@/components/Form'
import { Header } from '@/components/Header'
import { useEditItems } from '@/hooks/useEditItems'

import styles from './styles.module.scss'

export const ItemDetail = () => {
  const { product } = useEditItems()
  const navigate = useNavigate()

  return (
    <div>
      <Header
        props={{ title: product?.title, description: product?.description }}
      />

      <button className={styles.button_to__back} onClick={() => navigate(-1)}>
        <IoIosArrowBack /> Voltar
      </button>

      <div className={styles.image}>
        <img src={product?.photoUrl} alt={product?.title} />
      </div>

      <Form />
    </div>
  )
}
