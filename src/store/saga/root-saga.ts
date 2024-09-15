import { all } from 'redux-saga/effects'
import { categoriesSaga } from '@/store/ducks/categories'
import { cartSaga } from '@/store/ducks/cart'

export function* rootSaga() {
  yield all([categoriesSaga(), cartSaga()])
}
