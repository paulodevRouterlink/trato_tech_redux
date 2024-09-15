import { ItemProps } from '@/components/types/items-props'
import styles from './card-product.module.scss'

type CardProductImageProps = {
  props: Pick<ItemProps, 'photoUrl' | 'title'>
}

export const CardProductImage = ({
  props: { title, photoUrl },
}: CardProductImageProps) => (
  <div className={styles['card-product-image']}>
    <img src={photoUrl} alt={title} />
  </div>
)
