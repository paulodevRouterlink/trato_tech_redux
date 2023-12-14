import { createSlice } from '@reduxjs/toolkit'
import { CartProps } from '@/@types/CartProps'

const initialState: Array<CartProps> = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, { payload }) => {
      const isItem = state.some(item => item.id === payload)

      if (!isItem) return [...state, { id: payload, quantity: 1 }]

      return state.filter(item => item.id !== payload)
    },
  },
})

export const { changeCart } = cartSlice.actions
export default cartSlice.reducer
