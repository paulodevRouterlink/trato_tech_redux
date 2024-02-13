import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadOneCategory } from '@/store/actions/actions'
import { addItemsByCategory } from '@/store/reducers/items'
import { toasts } from '@/components/ui'
import { StateProps } from '@/store'
import itemsService from '@/services/items-service'

const listenerItems = createListenerMiddleware()

listenerItems.startListening({
  actionCreator: loadOneCategory,
  effect: async (action, { fork, dispatch, getState, unsubscribe }) => {
    const state = getState() as StateProps
    const categoryId: string = action?.payload!
    const itemsState = state.items

    if (itemsState.length === 25) return unsubscribe()

    const filteredItems = itemsState.some(
      (item) => item.category === categoryId,
    )

    if (filteredItems) return

    toasts.loader({ title: 'Items Loading' })
    const task = fork(async (api) => {
      await api.delay(1000)

      return await itemsService.getItemsByCategory(categoryId)
    })

    const response = await task.result

    if (response.status === 'ok') {
      toasts.success({ title: `Items Success of category ${categoryId}` })
      dispatch(addItemsByCategory(response.value))
    }

    if (response.status === 'rejected') {
      toasts.error({ title: 'Items Error' })
    }

    console.log('items loading...')
  },
})

export { listenerItems }
