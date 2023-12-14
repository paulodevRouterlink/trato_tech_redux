import { createSlice } from '@reduxjs/toolkit'
import { ItemProps } from '@/@types/ItemsProps'
import ITEMS from '@/data/[items]'

const initialState: ItemProps[] = ITEMS

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    changeFavorite: (state, { payload }) => {
      state.map(item => {
        if (item.id === payload) item.favorite = !item.favorite
        return item
      })
    },
  },
})

export const { changeFavorite } = itemSlice.actions
export default itemSlice.reducer
