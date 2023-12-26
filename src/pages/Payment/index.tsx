import { useEffect, useMemo, useState } from 'react'
import { Header } from '@/components/Header'
import styles from './styles.module.scss'
import { SelectField } from '@/components/SelectField'
import { Options } from '@/components/Options'
import { Button } from '@/components/Button'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import { finishPayment, loadPayment } from '@/store/reducers/cart'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CardsProps } from '@/@types/CardsProps'

const schemaSelectPayment = z.object({
  payment: z.string().min(1, { message: 'Informe sua forma de pagamento' }),
})

type SchemaSelectPaymentProps = z.infer<typeof schemaSelectPayment>

type CardsPaymentProps = CardsProps & {
  rate: number
}

export const Payment = () => {
  const [formPayment, setFormPayment] = useState({} as CardsPaymentProps)
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)
  const all = useAppSelector(state => state.cart.all)
  const valueAll = formPayment.id === '' ? all : all * formPayment.rate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaSelectPaymentProps>({
    resolver: zodResolver(schemaSelectPayment),
  })

  useEffect(() => {
    dispatch(loadPayment())
  }, [dispatch])

  const cardsPayment = useMemo(() => {
    const data = user.cards?.map(props => ({
      id: props.id,
      name: props.name,
    }))

    return data
  }, [user])

  const submitPayment = (data: SchemaSelectPaymentProps) => {
    console.log(data.payment)
    const cards = user.cards.find(card => card.id === data.payment)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormPayment(cards as any)
  }

  const onFinishPayment = () => {
    dispatch(finishPayment({ valueAll, formPayment }))
  }

  return (
    <section className={styles.container}>
      <Header props={{ title: 'Pagamento', description: '' }} />

      <div className={styles['form']}>
        <p className={styles['form-title']}>
          Olá {user.name}! Escolha a forma de pagamento:
        </p>

        <form onSubmit={handleSubmit(submitPayment)}>
          <SelectField errors={errors.payment?.message}>
            <select {...register('payment')}>
              <Options label="Forma de pagamento" options={cardsPayment} />
            </select>
          </SelectField>

          <div className={styles['form-content']}>
            {formPayment.id === '1' && (
              <>
                <p>
                  {' '}
                  A forma de pagamento {formPayment.name} tem taxa de{' '}
                  {formPayment.rate}x{' '}
                </p>
                <p>
                  {' '}
                  O saldo deste cartão é de R$ {formPayment.balance?.toFixed(
                    2
                  )}{' '}
                </p>
              </>
            )}
            <p>Total com taxas: R$ {valueAll.toFixed(2)}</p>
          </div>

          <div className={styles['form-finished']}>
            <Button
              type="submit"
              props={{ label: 'Finalizar compra' }}
              disabled={valueAll === 0 && formPayment.id !== ''}
              onClick={onFinishPayment}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
