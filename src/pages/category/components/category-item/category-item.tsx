import { ShoppingCartIcon } from 'lucide-react'
import { Card } from '@/components/ui'
import { ItemProps } from '@/components/types/items-props'
import { useCartProduct } from '@/hooks/useCartProduct'
import { COLORS } from '@/styles/colors'
import styles from './category-item.module.scss'

type CategoryItemProps = {
  item: ItemProps
}

const iconItemProps = {
  size: 24,
  color: COLORS.midnight[950],
}

export const CategoryItem = ({ item }: CategoryItemProps) => {
  const { id, title, favorite, price, photoUrl, description } = item
  const { itemsCart, handleItemAddToCart, isCart } = useCartProduct()

  const isCartItem = itemsCart.some((props) => props.id === id)

  return (
    <Card.Root props={{ id, isCartItem: false }}>
      <Card.Image props={{ title, photoUrl }} />
      <Card.Content props={{ title, price, description }}>
        <Card.Actions
          props={{ id, favorite, isCartItem }}
          cartItem={
            <ShoppingCartIcon
              {...iconItemProps}
              className={styles['category-item-icon--cart']}
              color={isCart ? COLORS.azure_radiance[700] : iconItemProps.color}
              onClick={() => handleItemAddToCart({ id })}
            />
          }
        />
      </Card.Content>
    </Card.Root>
  )
}
