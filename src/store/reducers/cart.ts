import { createAction, createSlice } from '@reduxjs/toolkit'
import { toasts } from '@/utils/toastify'
import { CartProps } from '@/@types/CartProps'

export type CartType = {
  data: CartProps[]
  all: 0
}

const initialState: CartType = { data: [], all: 0 }

const loadPayment = createAction('cart/loadPayment')
const finishPayment = createAction('cart/finishPayment')

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, { payload }) => {
      const isItem = state.data.some(item => item.id === payload)

      if (!isItem) {
        toasts.success({ title: 'Item adicionado no carrinho' })
        return {
          all: state.all,
          data: [...state.data, { id: payload, quantity: 1 }],
        }
      }

      return {
        all: state.all,
        data: state.data.filter(item => item.id !== payload),
      }
    },
    changeQuantity: (state, { payload }) => {
      state.data.map(itemCart => {
        if (itemCart.id === payload.id) itemCart.quantity += payload.quantity
        return itemCart
      })
    },
    changeAll: (state, { payload }) => {
      state.all = payload
    },
    resetCart: () => initialState,
  },
})

export { loadPayment, finishPayment }

export const { changeCart, changeQuantity, changeAll, resetCart } =
  cartSlice.actions
export default cartSlice.reducer
