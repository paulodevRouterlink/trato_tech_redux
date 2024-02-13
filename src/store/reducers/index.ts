import { cartReducer } from './cart'
import { categoriesReducer } from './categories'
import { itemsReducer } from './items'
import { searchReducer } from './search'
import { usersReducer } from './user'

export const reducer = {
  cart: cartReducer,
  items: itemsReducer,
  categories: categoriesReducer,
  search: searchReducer,
  user: usersReducer,
}
