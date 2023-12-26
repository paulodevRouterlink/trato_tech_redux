/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CategoryProps } from '@/@types/CategoryProps'
import categoriesService from '@/services/categoriesService'
import { resetCart } from './cart'

const initialState: CategoryProps[] = []

const loadCategories = createAction('categories/loadCategories')
const loadOneCategory = createAction('categories/loadOneCategory')

const fetchCategories = createAsyncThunk(
  'categories/get',
  categoriesService.get
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addAllCategories: (_, { payload }) => {
      return payload
    },
    addOneCategories: (state, { payload }) => {
      state.push(payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(resetCart.type, () => {})
  },
})

export const { addAllCategories, addOneCategories } = categoriesSlice.actions

export { fetchCategories, loadCategories, loadOneCategory }

export default categoriesSlice.reducer
