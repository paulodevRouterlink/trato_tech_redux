import { createSlice } from '@reduxjs/toolkit'
import { CartProps } from '@/@types/CartProps'

const initialState: CartProps[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCartAction: (state, { payload }) => {
      const isItem = state.some(item => item.id === payload)

      if (!isItem) return [...state, { id: payload, quantity: 1 }]

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

export const { changeCartAction, changeQuantityAction, resetCart } =
  cartSlice.actions
export default cartSlice.reducer
