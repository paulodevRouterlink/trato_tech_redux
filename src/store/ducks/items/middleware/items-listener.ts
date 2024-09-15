import { createListenerMiddleware, ForkedTask } from '@reduxjs/toolkit'
import { loadOneCategory } from '@/store/ducks/categories'
import { addItemsByCategory } from '@/store/ducks/items'
import { toasts } from '@/components/ui'
import { StateProps } from '@/store/types/store-types'
import { ItemProps } from '@/components/types'
import itemsService from '@/services/items-service'

const listenerItems = createListenerMiddleware()

listenerItems.startListening({
  actionCreator: loadOneCategory,
  effect: async ({ payload }, { fork, dispatch, getState, unsubscribe }) => {
    const state = getState() as StateProps
    const itemsState = state.items

    if (itemsState.length === 25) {
      return unsubscribe()
    }

    const filteredItems = itemsState.some(
      (item) => item.category === payload.categoryId,
    )

    if (filteredItems) {
      return
    }

    const task: ForkedTask<ItemProps[]> = fork<ItemProps[]>(async (api) => {
      await api.delay(1000)

      return await itemsService.getItemsByCategory(payload.categoryId)
    })

    const response = await task.result

    if (response.status === 'ok') {
      dispatch(addItemsByCategory(response.value))
    }

    if (response.status === 'rejected') {
      toasts.error({ title: 'Items Error' })
    }
  },
})

export { listenerItems }
