import { Card } from '@/components/layout'
import { ItemProps } from '@/components/types/items-props'
import { useCartProduct } from '@/hooks/useCartProduct'

type CategoryItemProps = {
  item: ItemProps
}

export const CategoryItem = ({ item }: CategoryItemProps) => {
  const { id, title, favorite, price, photoUrl, description } = item
  const { productCart } = useCartProduct()

  const isCartItem = productCart.some((props) => props.id === id)

  return (
    <Card.Root props={{ id, isCartItem: false }}>
      <Card.Image props={{ title, photoUrl }} />
      <Card.Content props={{ title, price, description }}>
        <Card.Actions props={{ id, favorite, isCartItem }} />
      </Card.Content>
    </Card.Root>
  )
}
