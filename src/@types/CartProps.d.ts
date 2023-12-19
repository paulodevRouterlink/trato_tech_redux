/* eslint-disable @typescript-eslint/no-explicit-any */
import { ItemProps } from './ItemsProps'

type CardProductInfo = {
  quantity?: number
  cart?: number
}

type CartProps = ItemProps & CardProductInfo & any

type CartType = ItemProps & { cart: ItemProps; quantity: number }

export type { CardProductInfo, CartProps, CartType }
