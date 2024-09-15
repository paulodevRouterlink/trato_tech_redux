import { Header } from '@/components/layout'
import { Button } from '@/components/ui'
import { CartItem } from './components'
import { useCart } from './useCart'
import styles from './cart.module.scss'

export const Cart = () => {
  const { totalPrice, productsCart, navigate } = useCart()

  return (
    <div>
      <Header.Root>
        <Header.Title
          title="Carrinho de compras"
          description="Confira produtos que você adicionou ao carrinho."
        />
      </Header.Root>

      <section className={styles.cart}>
        {productsCart.map((item) => (
          <CartItem key={item?.id} item={item} />
        ))}

        <div className={styles['cart-all']}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {totalPrice.toFixed(2)}</strong>
          </span>
        </div>

        <Button text="Finalizar compra" onClick={() => navigate('/payment')} />
      </section>
    </div>
  )
}
