import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadOneCategory } from '../reducers/categories'
import createTask from './utils/createTask'
import { StateProps } from '../index'
import itemsService from '@/services/itemsService'
import { addItemsByCategory } from '../reducers/items'

const listenerItems = createListenerMiddleware()

listenerItems.startListening({
  actionCreator: loadOneCategory,
  effect: async (action, { fork, dispatch, getState, unsubscribe }) => {
    const state = getState()
    const categoryId = action.payload
    const states = state as StateProps
    const itemsState = states.items

    if (itemsState.length === 25) return unsubscribe()

    const filteredItems = itemsState.some(item => item.category === categoryId)

    if (filteredItems) return

    await createTask({
      fork,
      dispatch,
      action: addItemsByCategory,
      fetch: () => itemsService.getItemsByCategory(categoryId),
      toastProps: {
        textSuccess: `Items Success of category ${categoryId}`,
        textLoad: 'Items Loading',
        textError: 'Items Error',
      },
    })

    console.log('items loading...')
  },
})

export default listenerItems
