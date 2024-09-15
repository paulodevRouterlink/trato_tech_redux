import { Task } from 'redux-saga'
import { call, cancel, delay, put, takeLatest } from 'redux-saga/effects'
import { toasts } from '@/components/ui/toastify/toastify'
import { loadCategories, addAllCategories } from '@/store/ducks/categories'
import { CategoryProps } from '@/components/types'
import categoriesService from '@/services/categories-service'

function* observableCategories() {
  try {
    yield delay(1000)
    const categories: CategoryProps[] = yield call(categoriesService.get)
    yield put(addAllCategories(categories))
  } catch (error) {
    if (error instanceof TypeError) {
      toasts.error({ title: error.message })
    }
  }
}

export function* categoriesSaga() {
  const task: Task = yield takeLatest(loadCategories, observableCategories)
  yield takeLatest(addAllCategories, function* () {
    yield cancel(task)
  })
}
