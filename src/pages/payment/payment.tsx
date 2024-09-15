import { Header } from '@/components/layout'
import { Button, Select } from '@/components/ui'
import { usePayment } from './usePayment'
import styles from './payment.module.scss'

export const Payment = () => {
  const {
    user,
    valueAll,
    formPayment,
    cardsPayment,
    handleFinishPayment,
    handleChangePayment,
  } = usePayment()

  return (
    <section className={styles.container}>
      <Header.Root>
        <Header.Title title="Pagamento" />
      </Header.Root>

      <div className={styles.form}>
        <p className={styles['form-title']}>
          Olá {user.name}! Escolha a forma de pagamento:
        </p>

        <Select
          value={formPayment.id}
          onChange={handleChangePayment}
          options={cardsPayment || []}
          placeholder="Selecione uma forma de pagamento"
        />

        <div className={styles['form-content']}>
          {Object.values(formPayment).length !== 0 && (
            <>
              <p>
                {' '}
                A forma de pagamento {formPayment.name} tem taxa de{' '}
                {formPayment.rate}x{' '}
              </p>
              <p>
                {' '}
                O saldo deste cartão é de R$ {formPayment.balance?.toFixed(
                  2,
                )}{' '}
              </p>
            </>
          )}
          <p>Total com taxas: R$ {valueAll.toFixed(2)}</p>
        </div>

        <div className={styles['form-finished']}>
          <Button
            text="Finalizar compra"
            disabled={valueAll === 0 || formPayment === undefined}
            onClick={handleFinishPayment}
          />
        </div>
      </div>
    </section>
  )
}
