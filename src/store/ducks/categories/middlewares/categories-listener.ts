import { createListenerMiddleware, ForkedTask } from '@reduxjs/toolkit'
import { loadOneCategory, addOneCategories } from '@/store/ducks/categories'
import { StateProps } from '@/store/types/store-types'
import { toasts } from '@/components/ui'
import categoriesService from '@/services/categories-service'
import { CategoryProps } from '@/components/types'

export const listenerCategories = createListenerMiddleware()

listenerCategories.startListening({
  actionCreator: loadOneCategory,
  effect: async ({ payload }, { fork, dispatch, getState, unsubscribe }) => {
    const state = getState() as StateProps
    const categoriesState = state.categories
    const hasExistCategory = categoriesState.some(
      (category) => category.id === payload.categoryId,
    )

    if (hasExistCategory) {
      return
    }

    if (categoriesState.length === 5) {
      return unsubscribe()
    }

    const task: ForkedTask<CategoryProps> = fork<CategoryProps>(async (api) => {
      await api.delay(1000)

      return await categoriesService.getOneCategory(payload.categoryId)
    })

    const response = await task.result

    if (response.status === 'ok') {
      dispatch(addOneCategories(response.value))
    }

    if (response.status === 'rejected') {
      toasts.error({ title: `Error ${payload.categoryId} failed` })
    }
  },
})
