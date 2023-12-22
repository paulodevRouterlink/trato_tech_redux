import { createListenerMiddleware } from '@reduxjs/toolkit'
import {
  addAllCategories,
  addOneCategories,
  loadCategories,
  loadOneCategory,
} from '../reducers/categories'
import categoriesService from '@/services/categoriesService'
import createTask from './utils/createTask'
import { StateProps } from '../index'

const listenerCategories = createListenerMiddleware()

listenerCategories.startListening({
  actionCreator: loadCategories,
  effect: async (_, { dispatch, fork, unsubscribe }) => {
    const response = await createTask({
      fork,
      dispatch,
      action: addAllCategories,
      fetch: categoriesService.get,
      toastProps: {
        textSuccess: 'Success',
        textLoad: 'Loading',
        textError: 'Error',
      },
    })

    if (response.status === 'ok') {
      unsubscribe()
    }
  },
})

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
