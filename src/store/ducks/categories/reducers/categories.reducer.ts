import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CategoryProps } from '@/components/types'
import categoriesService from '@/services/categories-service'
import { resetCart } from '@/store/ducks/cart'

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
