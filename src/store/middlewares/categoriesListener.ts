import { createListenerMiddleware } from '@reduxjs/toolkit'
import { addOneCategories, loadOneCategory } from '../reducers/categories'
import categoriesService from '@/services/categoriesService'
import createTask from './utils/createTask'
import { StateProps } from '../index'

const listenerCategories = createListenerMiddleware()

listenerCategories.startListening({
  actionCreator: loadOneCategory,
  effect: async (action, { fork, dispatch, getState, unsubscribe }) => {
    const state = getState()
    const categoryId = action.payload
    const states = state as StateProps
    const categoriesState = states.categories
    const filteredOneCategory = categoriesState.some(
      category => category.id === categoryId
    )

    if (filteredOneCategory) return

    if (categoriesState.length === 5) return unsubscribe()

    await createTask({
      fork,
      dispatch,
      action: addOneCategories,
      fetch: () => categoriesService.getOneCategory(categoryId),
      toastProps: {
        textSuccess: `Loaded ${categoryId} successfully`,
        textLoad: `Loading ${categoryId}`,
        textError: `Error ${categoryId} failed`,
      },
    })

    console.log('carrega apenas uma categoria')
  },
})

export default listenerCategories
