import { ReactElement, ReactNode } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { COLORS } from '@/styles/colors'
import { ItemProps } from '@/components/types/items-props'
import { useCartProduct } from '@/hooks/useCartProduct'
import styles from './card-product.module.scss'

const iconItemProps = {
  size: 24,
  color: COLORS.midnight[950],
}

type PropsActions = Pick<ItemProps, 'id' | 'favorite'> & {
  isCartItem: boolean
}

type CardProductActionsProps = {
  props: PropsActions
  cartItem?: ReactElement
  children?: ReactNode
}

export const CardProductActions = ({
  props: { id, favorite, isCartItem },
  children,
  cartItem,
}: CardProductActionsProps) => {
  const { handleFavoriteItem } = useCartProduct()

  return (
    <div className={styles['card-product-actions']}>
      {favorite ? (
        <AiFillHeart
          {...iconItemProps}
          color={COLORS.red[600]}
          className={styles['card-product-action']}
          onClick={() => handleFavoriteItem({ id })}
        />
      ) : (
        <AiOutlineHeart
          {...iconItemProps}
          className={styles['card-product-action']}
          onClick={() => handleFavoriteItem({ id })}
        />
      )}

      {isCartItem && <>{children}</>}

      {cartItem}
    </div>
  )
}
