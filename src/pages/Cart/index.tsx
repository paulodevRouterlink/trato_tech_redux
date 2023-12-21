import { Header } from '@/components/Header'
import { CardProduct } from '@/components/CardProduct'
import { Button } from '@/components/Button'
import { useCartProduct } from '@/hooks/useCartProduct'

import styles from './styles.module.scss'

export const Cart = () => {
  const { handleResetCart, cart, allItem } = useCartProduct({})

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
          onClick={handleResetCart}
        />
      </section>
    </div>
  )
}
