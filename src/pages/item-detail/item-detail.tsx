import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { Header } from '@/components/layout'
import { useProducts } from './useProducts'
import styles from './item-detail.module.scss'

export const ItemDetail = () => {
  const { productDetail } = useProducts()
  const navigate = useNavigate()

  return (
    <div>
      <Header.Root>
        <Header.Title
          title={productDetail?.title || ''}
          description={productDetail?.description}
        />
      </Header.Root>

      <button className={styles.button_to__back} onClick={() => navigate(-1)}>
        <IoIosArrowBack /> Voltar
      </button>

      <div className={styles.image}>
        <img src={productDetail?.photoUrl} alt={productDetail?.title} />
      </div>
    </div>
  )
}
