import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { toasts } from '@/components/ui/toastify/toastify'
import { ItemProps } from '@/components/types/items-props'
import itemsService from '@/services/items-service'

type CreateItemProps = Omit<ItemProps, 'id'>

const fetchItems = createAsyncThunk('items/get', itemsService.get)

const itemSlice = createSlice({
  name: 'items',
  initialState: [] as ItemProps[],
  reducers: {
    favoriteItem: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.map((item) => {
        if (item.id === payload.id) {
          toasts.info({ title: 'Item favoritado' })
          return (item.favorite = !item.favorite)
        }
        return item
      })
    },
    createItem: (state, { payload }: PayloadAction<CreateItemProps>) => {
      const items = {
        id: uuid(),
        ...payload,
      }

      state.push({ ...items })
      toasts.success({ title: 'Item criado com sucesso' })
    },
    updateItem: (state, { payload }: PayloadAction<ItemProps>) => {
      const index = state.findIndex((item) => item.id === payload.id)
      Object.assign(state[index], payload)
      toasts.success({ title: 'Item atualizado com sucesso' })
    },
    deleteItem: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((item) => item.id === payload.id)
      state.splice(index, 1)
      toasts.success({ title: 'Item deletado com sucesso' })
    },
    addItemsByCategory: (state, { payload }) => {
      state.push(...payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (_, { payload }) => {
      return payload
    })
  },
})

export { fetchItems }

export const {
  favoriteItem,
  createItem,
  updateItem,
  deleteItem,
  addItemsByCategory,
} = itemSlice.actions

export const itemsReducer = itemSlice.reducer
