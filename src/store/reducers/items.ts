import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
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
    createItem: (state, { payload }) => {
      state.push({...payload, id: uuid()})
    },
  },
})

export const { changeFavorite, createItem } = itemSlice.actions
export default itemSlice.reducer
