import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import {
  changeAll,
  changeCart,
  changeQuantity,
  resetCart,
} from '../reducers/cart'
import { addUser } from '../reducers/user'
import { toasts } from '@/components/ui/toastify/toastify'
import { UserProps } from '@/components/types/user-props'
import { CardsProps } from '@/components/types/cards-props'
import { FlagsProps } from '@/components/types/flags-props'
import userService from '@/services/user-service'
import cardsService from '@/services/cards-service'
import flagsService from '@/services/flags-service'
import { StateProps } from '../index'
import { finishPayment, loadPayment } from '../actions/actions'

const userLogged = 2

function* loadCartPayment() {
  try {
    const user: UserProps = yield call(userService.getById, userLogged)
    const cards: CardsProps[] = yield call(cardsService.getByUserId, userLogged)

    const flagsIDs = cards.map((card) => card.flagId)
    const flags: FlagsProps[] = yield call(flagsService.getByIds, flagsIDs)

    const cardsWithFlags = cards.map((card) => {
      const flagOfCard = flags.find((props) => props.id === card.flagId)

      return { ...card, rate: flagOfCard?.rate, flag: flagOfCard?.name }
    })

    yield put(addUser({ ...user, cards: cardsWithFlags }))
  } catch (error) {
    console.log(error)
  }
}

function* finishPaymentSaga({ payload }) {
  const { valueAll, formPayment } = payload

  if (valueAll > formPayment.balance) {
    return yield toasts.error({ title: 'Sem saldo!' })
  } else {
    yield toasts.success({ title: 'Compra finalizada!' })
  }

  yield put(resetCart())
}

function* calcAll() {
  yield delay(500)
  const state: StateProps = yield select()

  const all = state.cart.itemsCart.reduce((all, itemCart) => {
    const item = state.items.find((item) => item.id === itemCart.id)
    return all + item!.price * itemCart.quantity
  }, 0)

  yield put(changeAll(all))
}

export function* cartSaga() {
  yield takeLatest(loadPayment, loadCartPayment)
  yield takeEvery([changeQuantity, changeCart], calcAll)
  yield takeLatest(finishPayment, finishPaymentSaga)
}
