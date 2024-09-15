import { cartReducer } from '@/store/ducks/cart'
import { searchReducer } from '@/store/ducks/search'
import { categoriesReducer } from '@/store/ducks/categories'
import { usersReducer } from '@/store/ducks/user'
import { itemsReducer } from '@/store/ducks/items'

export const reducer = {
  cart: cartReducer,
  items: itemsReducer,
  categories: categoriesReducer,
  search: searchReducer,
  user: usersReducer,
}
