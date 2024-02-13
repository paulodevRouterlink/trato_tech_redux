import { ItemCartProps } from '@/components/types/cart-props'
import { ItemProps } from '@/components/types/items-props'

type CardProductProps = {
  card: ItemProps
  cart?: ItemCartProps
}

export type { CardProductProps }
