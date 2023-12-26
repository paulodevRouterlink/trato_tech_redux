import { useEffect } from 'react'
import { Header } from '@/components/Header'
import styles from './styles.module.scss'
import { SelectField } from '@/components/SelectField'
import { Options } from '@/components/Options'
import { Button } from '@/components/Button'
import { useAppDispatch } from '@/store/hooks/useRedux'
import { loadPayment } from '@/store/reducers/cart'

export const Payment = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadPayment())
  }, [dispatch])

  return (
    <section className={styles.container}>
      <Header props={{ title: 'Pagamento', description: '' }} />

      <div className={styles['form-group']}>
        <p className={styles['form-title']}>
          Olá usuário! Escolha a forma de pagamento:
        </p>

        <SelectField errors={undefined}>
          <select>
            <Options label="Forma de pagamento" options={[]} />
          </select>
        </SelectField>

        <div className={styles.content}>
          <p>Total com taxas: R$ 0.00</p>
        </div>

        <div className={styles.finished}>
          <Button props={{ label: 'Finalizar compra' }} />
        </div>
      </div>
    </section>
  )
}
