import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './reducers/categories'
import itemsReducer from './reducers/items'
import cartReducer from './reducers/cart'
import searchReducer from './reducers/search'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer,
    categories: categoriesReducer,
    search: searchReducer,
  },
})

export default store

export type StateProps = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
