import { createSlice } from '@reduxjs/toolkit'
import { CategoryProps } from '@/@types/CategoryProps'
import Categories from '@/data/[categories]'

const initialState: CategoryProps[] = Categories

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
})

export default categoriesSlice.reducer
