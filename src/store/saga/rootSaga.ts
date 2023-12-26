import { all } from 'redux-saga/effects'
import { categoriesSaga } from './sagaCategories'
import { cartSaga } from './sagaCart'

export function* rootSaga() {
  yield all([categoriesSaga(), cartSaga()])
}
