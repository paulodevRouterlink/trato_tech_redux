import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { addAllCategories } from '../reducers/categories'
import { toasts } from '@/components/ui/toastify/toastify'
import { loadCategories } from '../actions/actions'
import { CategoryProps } from '@/components/types/category-props'
import categoriesService from '@/services/categories-service'

// TODO: função Worker, função que observar uma action
function* observableCategories() {
  toasts.loader({ title: 'carregando' })

  try {
    yield delay(1000)
    const categories: CategoryProps[] = yield call(categoriesService.get)
    yield put(addAllCategories(categories))
    console.log('==> ', categories)
    toasts.success({ title: 'sucesso' })
  } catch (error) {
    toasts.error({ title: 'erro' })
  }
}

// TODO: função Watcher
export function* categoriesSaga() {
  const task = yield takeLatest(loadCategories, observableCategories)
  yield takeLatest(addAllCategories, () => task.cancel())
}
