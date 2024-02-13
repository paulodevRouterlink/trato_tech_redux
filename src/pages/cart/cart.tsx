import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartProduct } from '@/hooks/useCartProduct'
import { Header } from '@/components/layout'
import { Button } from '@/components/ui'
import { useProducts } from '@/hooks/useProducts'
import { CartItem } from './components'
import styles from './cart.module.scss'

export const Cart = () => {
  const { cart, allItem } = useCartProduct()
  const { items } = useProducts()
  const navigate = useNavigate()

  const { data } = useMemo(() => {
    const data = cart.map((props) => {
      const productCart = items.find((product) => product.id === props.id)

      return {
        id: props.id,
        title: productCart?.title!,
        description: productCart?.description!,
        photoUrl: productCart?.photoUrl!,
        favorite: productCart?.favorite!,
        price: productCart?.price!,
        category: productCart?.category!,
        quantity: props.quantity,
      }
    })

    return { data }
  }, [])

  return (
    <div>
      <Header.Root>
        <Header.Title
          props={{
            title: 'Carrinho de compras',
            description: 'Confira produtos que você adicionou ao carrinho.',
          }}
        />
      </Header.Root>

      <section className={styles.cart}>
        {data.map((item) => (
          <CartItem key={item?.id} item={item} />
        ))}

        <div className={styles['cart-all']}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {allItem.toFixed(2)}</strong>
          </span>
        </div>
        <Button
          props={{ label: 'Finalizar compra' }}
          onClick={() => navigate('/cart')}
        />
      </section>
    </div>
  )
}
