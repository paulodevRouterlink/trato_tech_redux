import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import categoriesReducer from './reducers/categories'
import itemsReducer from './reducers/items'
import userReducer from './reducers/user'
import cartReducer from './reducers/cart'
import searchReducer from './reducers/search'
import listenerItems from './middlewares/itemsListener'
import listenerCategories from './middlewares/categoriesListener'
import { rootSaga } from './saga/rootSaga'

/**
 * FIX: Corrigir o bug do sagaMiddleware ao integrar ele com o middleware do store
 */

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer,
    categories: categoriesReducer,
    search: searchReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(listenerItems.middleware, listenerCategories.middleware)
      .concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store

export type StateProps = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
