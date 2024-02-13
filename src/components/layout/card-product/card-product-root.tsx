import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './card-product.module.scss'
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { useCartProduct } from '@/hooks/useCartProduct'

type CardProductRootProps = {
  props: { id: string; isCartItem: boolean }
  children: ReactNode
}

const CardProductRoot = ({
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
          <RiEdit2Line onClick={() => navigate(`item/${id}`)} />
          <RiDeleteBin6Line onClick={() => handleDeleteItem({ id })} />
        </div>
      )}
      {children}
    </article>
  )
}

export { CardProductRoot }
