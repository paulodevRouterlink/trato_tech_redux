import { ReactNode } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { COLORS } from '@/styles/colors'
import { ItemProps } from '@/components/types/items-props'
import styles from './card-product.module.scss'
import { useCartProduct } from '@/hooks/useCartProduct'

const iconItemProps = {
  size: 24,
  color: COLORS.midnight[950],
}

type PropsActions = Pick<ItemProps, 'id' | 'favorite'> & {
  isCartItem: boolean
}

type CardProductActionsProps = {
  props: PropsActions
  children?: ReactNode
}

export const CardProductActions = ({
  props: { id, favorite, isCartItem },
  children,
}: CardProductActionsProps) => {
  const { handleFavoriteItem, handleItemAddToCart, isCart } = useCartProduct()

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

      {isCartItem ? (
        <>{children}</>
      ) : (
        <FaCartPlus
          {...iconItemProps}
          className={styles['card-product-action']}
          color={isCart ? COLORS.azure_radiance[700] : iconItemProps.color}
          onClick={() => handleItemAddToCart({ id })}
        />
      )}
    </div>
  )
}
