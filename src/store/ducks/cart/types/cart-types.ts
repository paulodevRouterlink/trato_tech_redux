import { CardsPaymentProps, ItemCartProps } from '@/components/types'

export type FinishPaymentType = {
  valueAll: number
  formPayment: CardsPaymentProps
}

export type CartProps = {
  totalPrice: number
  itemsCart: ItemCartProps[]
}
