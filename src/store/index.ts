import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './reducers/categories'

const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch