import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './reducers/categories'
import itemsReducer from './reducers/items'
import cartReducer from './reducers/cart'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer,
    categories: categoriesReducer,
  }
})

export default store

export type StateProps = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch