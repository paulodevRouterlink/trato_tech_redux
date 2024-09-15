import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit'
import { FinishPaymentType } from '@/store/ducks/cart'

export const loadPayment = createAction('cart/loadPayment')

export const finishPayment: ActionCreatorWithPayload<
  FinishPaymentType,
  string
> = createAction<FinishPaymentType>('cart/finishPayment')
