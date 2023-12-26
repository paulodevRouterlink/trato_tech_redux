import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { addAllCategories, loadCategories } from '../reducers/categories'
import { toasts } from '@/utils/toastify'
import categoriesService from '@/services/categoriesService'
import { CategoryStateProps } from '@/@types/CategoryProps'

// TODO: função Worker, função que observar uma action
function* observableCategories() {
  toasts.loader({ title: 'carregando' })

  try {
    yield delay(1000)
    const categories: CategoryStateProps = yield call(categoriesService.get)
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
