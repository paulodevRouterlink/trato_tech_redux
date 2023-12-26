import { createAction, createSlice } from '@reduxjs/toolkit'
import { CartProps } from '@/@types/CartProps'
import { toasts } from '@/utils/toastify'

const initialState: CartProps[] = []

const loadPayment = createAction('cart/loadPayment')

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCartAction: (state, { payload }) => {
      const isItem = state.some(item => item.id === payload)

      if (!isItem) {
        toasts.success({ title: 'Item adicionado no carrinho' })
        return [...state, { id: payload, quantity: 1 }]
      }

      return state.filter(item => item.id !== payload)
    },
    changeQuantityAction: (state, { payload }) => {
      state.map(itemCart => {
        if (itemCart.id === payload.id) itemCart.quantity += payload.quantity
        return itemCart
      })
    },
    resetCart: () => initialState,
  },
})

export { loadPayment }

export const { changeCartAction, changeQuantityAction, resetCart } =
  cartSlice.actions
export default cartSlice.reducer
