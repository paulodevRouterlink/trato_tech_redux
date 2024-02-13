import { Card } from '@/components/layout'
import { ProductCartProps } from '@/components/types/cart-props'
import { useCartProduct } from '@/hooks/useCartProduct'

type CartItemProps = {
  item: ProductCartProps
}

export const CartItem = ({ item }: CartItemProps) => {
  const { id, title, favorite, price, photoUrl, description, quantity } = item
  const { isCartItem } = useCartProduct()

  return (
    <Card.Root props={{ id, isCartItem: isCartItem(id) }}>
      <Card.Image props={{ title, photoUrl }} />
      <Card.Content props={{ title, price, description }}>
        <Card.Actions props={{ id, favorite, isCartItem: isCartItem(id) }}>
          <Card.CartActions props={{ id, quantity }} />
        </Card.Actions>
      </Card.Content>
    </Card.Root>
  )
}
