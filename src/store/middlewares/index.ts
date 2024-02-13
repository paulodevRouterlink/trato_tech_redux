import { listenerCategories } from './categories-listener/categories-listener'
import { listenerItems } from './items-listener/items-listener'

export const middlewares = [
  listenerItems.middleware,
  listenerCategories.middleware
]