import { ChangeEvent, useEffect, useState } from 'react'
import { finishPayment, loadPayment } from '@/store/ducks/cart'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import { CardsPaymentProps } from '@/components/types/payment-props'
import { toasts } from '@/components/ui'

export const usePayment = () => {
  const [formPayment, setFormPayment] = useState({} as CardsPaymentProps)
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const { totalPrice } = useAppSelector((state) => state.cart)

  useEffect(() => {
    dispatch(loadPayment())
  }, [dispatch])

  const valueAll =
    Object.values(formPayment).length !== 0 && formPayment.id === ''
      ? totalPrice * formPayment.rate
      : totalPrice

  const cardsPayment = user.cards?.map(({ id, name }) => ({ id, name }))

  const handleChangePayment = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === '') {
      toasts.warn({ title: 'Selecione uma forma de pagamento' })
      return
    }

    const cards = user.cards.find((card) => card.id === event.target.value)

    if (cards) {
      setFormPayment({ ...cards })
    }
  }

  const handleFinishPayment = () => {
    dispatch(finishPayment({ valueAll, formPayment }))
  }

  return {
    user,
    valueAll,
    cardsPayment,
    formPayment,
    handleChangePayment,
    handleFinishPayment,
  }
}
