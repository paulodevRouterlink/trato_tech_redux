import { Header } from '@/components/Header'
import { CardProduct } from '@/components/CardProduct'
import { Button } from '@/components/Button'
import { useCartProduct } from '@/hooks/useCartProduct'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cart, allItem } = useCartProduct({})
  const navigate = useNavigate()

  return (
    <div>
      <Header
        props={{
          title: 'Carrinho de compras',
          description: 'Confira produtos que você adicionou ao carrinho.',
        }}
      />

      <section className={styles.cart}>
        {cart.map(item => (
          <CardProduct key={item.id} card={item} cart={item} />
        ))}

        <div className={styles['cart-all']}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {allItem.toFixed(2)}</strong>
          </span>
        </div>
        <Button
          props={{ label: 'Finalizar compra' }}
          onClick={() => navigate('/payment')}
        />
      </section>
    </div>
  )
}
