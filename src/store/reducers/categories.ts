import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CategoryProps } from '@/@types/CategoryProps'
import categoriesService from '@/services/categoriesService'
import { toasts } from '@/utils/toastify'

const initialState: CategoryProps[] = []

const fetchCategories = createAsyncThunk(
  'categories/get',
  categoriesService.get
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (_, { payload }) => {
        toasts.success({title: 'Categorias carregadas!'})
        return payload
      })
      .addCase(fetchCategories.pending, (state, { payload }) => {
        console.log('loading categories')
        toasts.loader({title: 'Carregando'})
        console.log('State', state)
        console.log('Payload', payload)
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        console.log('error loading categories')
        toasts.error({ title: 'Falha no carregamento!' })
        console.log('State', state)
        console.log('Payload', payload)
      })
  },
})

export { fetchCategories }

export default categoriesSlice.reducer
