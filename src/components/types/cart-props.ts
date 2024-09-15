export type ItemCartProps = {
  id: string
  quantity: number
}

export type CartProps = {
  totalPrice: number
  itemsCart: ItemCartProps[]
}
