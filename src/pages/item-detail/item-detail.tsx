import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useProducts } from '@/hooks/useProducts'
import { Header } from '@/components/layout'
import styles from './item-detail.module.scss'

export const ItemDetail = () => {
  const { item, product, setProduct } = useProducts()
  const navigate = useNavigate()

  useEffect(() => {
    if (item) {
      setProduct(item)
    }
  }, [])

  return (
    <div>
      <Header.Root>
        <Header.Title
          props={{ title: product?.title, description: product?.description }}
        />
      </Header.Root>

      <button className={styles.button_to__back} onClick={() => navigate(-1)}>
        <IoIosArrowBack /> Voltar
      </button>

      <div className={styles.image}>
        <img src={product?.photoUrl} alt={product?.title} />
      </div>
    </div>
  )
}
