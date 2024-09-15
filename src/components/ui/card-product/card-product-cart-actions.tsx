import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import styles from './card-product.module.scss'
import { useCartProduct } from '@/hooks/useCartProduct'

const iconQuantityProps = { size: 32 }

type CardProductCartActionProps = {
  props: {
    id: string
    quantity: number
  }
}

export const CardProductCartAction = ({
  props: { id },
}: CardProductCartActionProps) => {
  const { incrementQuantityItem, decrementQuantityItem, cart } =
    useCartProduct()

  const cartQuantity = cart.find((props) => props.id === id)

  return (
    <div className={styles.quantity}>
      <span>Quantidade: </span>
      <AiFillMinusCircle
        {...iconQuantityProps}
        onClick={() =>
          decrementQuantityItem({ id, quantity: cartQuantity?.quantity || 0 })
        }
      />
      <span>{String(cartQuantity?.quantity || 0).padStart(2, '0')}</span>
      <AiFillPlusCircle
        {...iconQuantityProps}
        onClick={() => incrementQuantityItem({ id })}
      />
    </div>
  )
}
