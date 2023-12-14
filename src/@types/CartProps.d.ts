/* eslint-disable @typescript-eslint/no-explicit-any */
type CardProductInfo = {
  quantity?: number
  cart?: string | number
}

type CartProps = ItemProps & CardProductInfo & any

export type { CardProductInfo, CartProps }
