import { ItemProps } from './items-props'

type ProductCartProps = ItemProps & {
  quantity: number
}

type ItemCartProps = {
  id: string
  quantity: number
}

type CartProps = {
  totalPrice: number
  itemsCart: ItemCartProps[]
}

type CartProductProps = { card: ItemProps }

type QuantityItemProps = ItemCartProps

export type {
  ItemCartProps,
  CartProps,
  CartProductProps,
  QuantityItemProps,
  ProductCartProps,
}
