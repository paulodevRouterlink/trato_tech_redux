import { Card } from '@/components/ui'
import { useCartProduct } from '@/hooks/useCartProduct'
import { ItemProps } from '@/components/types'

type CartItemProps = {
  item: ItemProps & {
    quantity: number
  }
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
