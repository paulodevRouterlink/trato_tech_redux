import { listenerCategories } from '@/store/ducks/categories'
import { listenerItems } from '@/store/ducks/items'

export const middlewares = [
  listenerItems.middleware,
  listenerCategories.middleware,
]
