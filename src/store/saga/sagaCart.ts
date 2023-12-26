import { takeLatest } from 'redux-saga/effects'
import { loadPayment } from '../reducers/cart'

function* loadCartPayment() {
  yield console.log('Carregando pagamento')
}

export function* cartSaga() {
  yield takeLatest(loadPayment, loadCartPayment)
}
