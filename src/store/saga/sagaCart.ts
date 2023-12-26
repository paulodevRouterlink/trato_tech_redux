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
  finishPayment,
  loadPayment,
  resetCart,
} from '../reducers/cart'
import { addUser } from '../reducers/user'
import { UserProps } from '@/@types/UserProps'
import { CardsProps } from '@/@types/CardsProps'
import { FlagsProps } from '@/@types/FlagsProps'
import userService from '@/services/userService'
import cardsService from '@/services/cardsService'
import flagsService from '@/services/flagsService'
import { StateProps } from '../index'
import { toasts } from '@/utils/toastify'

const userLogged = 2

function* loadCartPayment() {
  try {
    // const [users, card] = yield all([
    //   call(userService.getById, userLogged),
    //   call(cardsService.getByUserId, userLogged),
    // ])
    // const user = users as UserProps
    // const cards = card as CardsProps

    const user: UserProps = yield call(userService.getById, userLogged)
    const cards: CardsProps[] = yield call(cardsService.getByUserId, userLogged)

    const flagsIDs = cards.map(card => card.flagId)
    const flags: FlagsProps = yield call(flagsService.getByIds, flagsIDs)

    const cardsWithFlags = cards.map(card => {
      const flagOfCard = flags.find(props => props.id === card.flagId)

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

  const all = state.cart.data.reduce((all, itemCart) => {
    const item = state.items.find(item => item.id === Number(itemCart.id))
    return all + item!.price * itemCart.quantity
  }, 0)

  yield put(changeAll(all))
}

export function* cartSaga() {
  yield takeLatest(loadPayment, loadCartPayment)
  yield takeEvery([changeQuantity, changeCart], calcAll)
  yield takeLatest(finishPayment, finishPaymentSaga)
}
