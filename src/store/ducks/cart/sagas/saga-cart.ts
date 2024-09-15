import { PayloadAction } from '@reduxjs/toolkit'
import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import { toasts } from '@/components/ui/toastify/toastify'
import { FlagsProps, CardsProps, UserProps } from '@/components/types'
import userService from '@/services/user-service'
import cardsService from '@/services/cards-service'
import flagsService from '@/services/flags-service'
import { StateProps } from '@/store/types/store-types'
import {
  changeAll,
  changeCart,
  changeQuantity,
  resetCart,
  finishPayment,
  FinishPaymentType,
  loadPayment,
} from '@/store/ducks/cart'
import { addUser } from '@/store/ducks/user'

const userLogged = 1

function* loadPaymentSaga() {
  try {
    const user: UserProps = yield call(userService.getById, userLogged)
    const cards: CardsProps[] = yield call(cardsService.getByUserId, userLogged)

    const flagsIDs = cards.map((card) => card.flagId)
    const flags: FlagsProps[] = yield call(flagsService.getByIds, flagsIDs)

    const cardsWithFlags = cards.map((card) => {
      const flagOfCard = flags.filter((props) => props.id === card.flagId)[0]

      return {
        ...card,
        rate: flagOfCard ? flagOfCard.rate : 0,
        flag: flagOfCard ? flagOfCard.name : '',
      }
    })

    yield put(addUser({ ...user, cards: cardsWithFlags }))
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(error.message)
    }
  }
}

function* loadFinishPaymentSaga({ payload }: PayloadAction<FinishPaymentType>) {
  const { valueAll, formPayment } = payload

  if (valueAll > formPayment.balance) {
    yield toasts.error({ title: 'Sem saldo!' })
    return
  } else {
    yield toasts.success({ title: 'Compra finalizada!' })
  }

  yield put(resetCart())
}

function* loadCalcAll() {
  yield delay(500)
  const { items, cart }: StateProps = yield select()

  const all = cart.itemsCart.reduce((all, itemCart) => {
    const item = items.find((item) => item.id === itemCart.id)
    const price = item ? item.price : 0

    return all + price * itemCart.quantity
  }, 0)

  yield put(changeAll(all))
}

export function* cartSaga() {
  yield takeLatest(loadPayment, loadPaymentSaga)
  yield takeEvery([changeQuantity, changeCart], loadCalcAll)
  yield takeLatest(finishPayment, loadFinishPaymentSaga)
}
