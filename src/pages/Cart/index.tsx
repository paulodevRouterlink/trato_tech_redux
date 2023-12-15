import { Header } from '@/components/Header'
import { StateProps } from '@/store'
import { CardProduct } from '@/components/CardProduct'
import { CartType } from '@/@types/CartProps'

import { useCartProduct } from '@/hooks/useCartProduct'
import { useAppSelector } from '@/store/hooks/useSelectRedux'

import styles from './styles.module.scss'

export const Cart = () => {
  const { handleResetCart } = useCartProduct({})

  const { cart, allItem } = useAppSelector((state: StateProps) => {
    let allItem = 0
    const regexp = new RegExp(state.search, 'i')

    const cartReducer: CartType[] = state.cart.reduce((items, itemCart) => {
      const item = state.items.find(item => item.id === itemCart.id)
      allItem += item!.price * itemCart.quantity

      if (item!.title.match(regexp)) {
        items.push({ ...item, quantity: itemCart.quantity })
      }

      return items
    }, [])

    return { cart: cartReducer, allItem }
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
        {cart.map(item => (
          <CardProduct key={item.id} card={item} cart={item} />
        ))}

        <div className={styles['cart-all']}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {allItem.toFixed(2)}</strong>
          </span>
        </div>
        <button className={styles['cart-btn-finish']} onClick={handleResetCart}>
          Finalizar compra
        </button>
      </section>
    </div>
  )
}
