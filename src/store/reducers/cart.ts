import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartProps } from '@/components/types/cart-props'
import { toasts } from '@/components/ui'

type CartQuantityProps = {
  id: string
  quantity: number
}

const INITIAL_STATE: CartProps = { itemsCart: [], totalPrice: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    changeCart: (state, { payload }: PayloadAction<{ id: string }>) => {
      const isItem = state.itemsCart.some((item) => item.id === payload.id)

      if (!isItem) {
        toasts.success({ title: 'Item adicionado no carrinho' })

        const cart = {
          id: payload.id,
          quantity: 1,
        }

        return {
          totalPrice: state.totalPrice,
          itemsCart: [...state.itemsCart, { ...cart }],
        }
      }

      return {
        totalPrice: state.totalPrice,
        itemsCart: state.itemsCart.filter((item) => item.id !== payload.id),
      }
    },
    changeQuantity: (state, { payload }: PayloadAction<CartQuantityProps>) => {
      state.itemsCart.map((itemCart) => {
        if (itemCart.id === payload.id) itemCart.quantity += payload.quantity
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
