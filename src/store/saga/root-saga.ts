import { all } from 'redux-saga/effects'
import { categoriesSaga } from './saga-categories'
import { cartSaga } from './saga-cart'

export function* rootSaga() {
  yield all([categoriesSaga(), cartSaga()])
}
