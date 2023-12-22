/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { ItemProps } from '@/@types/ItemsProps'
import itemsService from '@/services/itemsService'
import { toasts } from '@/utils/toastify'

const initialState: ItemProps[] = []

const fetchItems = createAsyncThunk('items/get', itemsService.get)

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    changeFavorite: (state, { payload }) => {
      state.map(item => {
        if (item.id === payload) item.favorite = !item.favorite
        return item
      })
      toasts.success({ title: 'Item adicionado nos favoritos' })
    },
    createItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() })
      toasts.success({ title: 'Item criado com sucesso' })
    },
    updateItem: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id)
      Object.assign(state[index], payload.item)
      toasts.success({ title: 'Item atualizado com sucesso' })
    },
    deleteItem: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload)
      state.splice(index, 1)
      toasts.success({ title: 'Item deletado com sucesso' })
    },
    addItemsByCategory: (state, { payload }) => {
      state.push(...payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchItems.fulfilled, (_, { payload }) => {
      return payload
    })
  },
})

export { fetchItems }

export const {
  changeFavorite,
  createItem,
  updateItem,
  deleteItem,
  addItemsByCategory,
} = itemSlice.actions

export default itemSlice.reducer
