import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ItemCartProps } from '@/components/types'
import { CartProps } from '@/store/ducks/cart'
import { toasts } from '@/components/ui'

const INITIAL_STATE = {
  itemsCart: [],
  totalPrice: 0,
} satisfies CartProps as CartProps

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    changeCart: (state, { payload }: PayloadAction<{ id: string }>) => {
      const isItem = state.itemsCart.some((item) => item.id === payload.id)

      if (!isItem) {
        toasts.success({ title: 'Item adicionado no carrinho' })

        return {
          totalPrice: state.totalPrice,
          itemsCart: [...state.itemsCart, { id: payload.id, quantity: 1 }],
        }
      }

      return {
        totalPrice: state.totalPrice,
        itemsCart: state.itemsCart.filter((item) => item.id !== payload.id),
      }
    },
    changeQuantity: (state, { payload }: PayloadAction<ItemCartProps>) => {
      state.itemsCart.map((itemCart) => {
        if (itemCart.id === payload.id) {
          return (itemCart.quantity += payload.quantity)
        }
        return itemCart
      })
    },
    changeAll: (state, { payload }: PayloadAction<number>) => {
      state.totalPrice = payload
    },
    resetCart: () => INITIAL_STATE,
  },
})

export const { changeCart, changeQuantity, changeAll, resetCart } =
  cartSlice.actions
export const cartReducer = cartSlice.reducer
