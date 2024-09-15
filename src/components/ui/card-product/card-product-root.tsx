import { ReactNode } from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { PencilIcon, TrashIcon } from 'lucide-react'
import { useCartProduct } from '@/hooks/useCartProduct'
import styles from './card-product.module.scss'

type CardProductRootProps = {
  props: {
    id: string
    isCartItem: boolean
  }
  children: ReactNode
}

export const CardProductRoot = ({
  props: { id, isCartItem },
  children,
}: CardProductRootProps) => {
  const navigate = useNavigate()
  const { handleDeleteItem } = useCartProduct()

  return (
    <article
      className={classNames(styles['card-product'], {
        [styles.itemCart]: isCartItem,
      })}
    >
      {!isCartItem && (
        <div className={styles['card-product-action--bar']}>
          <PencilIcon
            className={styles['card-product-action--icon']}
            onClick={() => navigate(`item/${id}`)}
          />
          <TrashIcon
            className={styles['card-product-action--icon']}
            onClick={() => handleDeleteItem({ id })}
          />
        </div>
      )}
      {children}
    </article>
  )
}
