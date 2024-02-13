import { ItemProps } from '@/components/types/items-props'
import styles from './card-product.module.scss'
import { ReactNode } from 'react'

type CardProductContentProps = {
  props: Pick<ItemProps, 'title' | 'description' | 'price'>
  children: ReactNode
}

export const CardProductContent = ({
  props: { title, price, description },
  children,
}: CardProductContentProps) => (
  <div className={styles['card-product-description']}>
    <div className={styles['card-product-title']}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

    <div className={styles['card-product-info']}>
      <span className={styles['card-product-price']}>
        R$ {price.toFixed(2)}
      </span>
      {children}
    </div>
  </div>
)
