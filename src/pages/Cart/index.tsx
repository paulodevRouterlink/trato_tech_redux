import { useSelector } from 'react-redux'
import { Header } from '@/components/Header'

import styles from './styles.module.scss'
import { StateProps } from '@/store'
import { CardProduct } from '@/components/CardProduct'
import { CartProps } from '@/@types/CartProps'

export const Cart = () => {
  const cart = useSelector((state: StateProps) => {
    const cartReducer = state.cart.reduce((items, itemCart) => {
      const item = state.items.find(item => item.id === itemCart.id)
      items.push({ ...item, quantity: itemCart.quantity })

      return items
    }, [])

    return cartReducer as CartProps[]
  })

  return (
    <div>
      <Header
        props={{
          title: 'Carrinho de compras',
          description: 'Confira produtos que você adicionou ao carrinho.',
        }}
      />

      <section className={styles.cart}>
        {cart.map((item: CartProps) => (
          <CardProduct key={item.id} card={item} />
        ))}

        <div className={styles['cart-all']}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {(0.0).toFixed(2)}</strong>
          </span>
        </div>
        <button className={styles['cart-btn-finish']}>Finalizar compra</button>
      </section>
    </div>
  )
}
