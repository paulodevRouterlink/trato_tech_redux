import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadOneCategory } from '@/store/actions/actions'
import { addOneCategories } from '@/store/reducers/categories'
import { StateProps } from '@/store'
import { toasts } from '@/components/ui'
import categoriesService from '@/services/categories-service'

const listenerCategories = createListenerMiddleware()

listenerCategories.startListening({
  actionCreator: loadOneCategory,
  effect: async ({ payload }, { fork, dispatch, getState, unsubscribe }) => {
    const state = getState() as StateProps
    const categoryId: string = payload!
    const categoriesState = state.categories
    const filteredOneCategory = categoriesState.some(
      (category) => category.id === categoryId,
    )

    if (filteredOneCategory) return

    if (categoriesState.length === 5) return unsubscribe()

    toasts.loader({ title: `Loading ${categoryId}` })
    const task = fork(async (api) => {
      await api.delay(1000)

      return await categoriesService.getOneCategory(categoryId)
    })

    const response = await task.result

    if (response.status === 'ok') {
      toasts.success({ title: `Loaded ${categoryId} successfully` })
      dispatch(addOneCategories(response.value))
    }

    if (response.status === 'rejected') {
      toasts.error({ title: `Error ${categoryId} failed` })
    }

    console.log('carrega apenas uma categoria')
  },
})

export { listenerCategories }
