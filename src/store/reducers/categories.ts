/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { resetCart } from './cart'
import { CategoryProps } from '@/components/types/category-props'
import categoriesService from '@/services/categories-service'

const fetchCategories = createAsyncThunk(
  'categories/get',
  categoriesService.get,
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [] as CategoryProps[],
  reducers: {
    addAllCategories: (_, { payload }: PayloadAction<CategoryProps[]>) => {
      return payload
    },
    addOneCategories: (state, { payload }: PayloadAction<CategoryProps>) => {
      state.push(payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetCart.type, () => {
      console.log('Carrinho resetado!')
    })
  },
})

export { fetchCategories }
export const { addAllCategories, addOneCategories } = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer
