import { useNavigate } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from 'react-icons/ai'
import classNames from 'classnames'

import { COLORS } from '@/styles/colors'
import { ItemProps } from '@/@types/ItemsProps'
import { CartType } from '@/@types/CartProps'
import { useCartProduct } from '@/hooks/useCartProduct'
import styles from './styles.module.scss'

const iconItemProps = {
  size: 24,
  color: COLORS.midnight[950],
}

const iconQuantityProps = {
  size: 32,
  color: COLORS.azure_radiance[700],
}

type CardProductProps = {
  card: ItemProps
  cart?: CartType
}

export const CardProduct = ({ card, cart }: CardProductProps) => {
  const { id, title, price, description, photoUrl, favorite } = card
  const {
    isCart,
    handleFavorite,
    handleAddToCart,
    incrementQuantity,
    decrementQuantity,
  } = useCartProduct({ id })
  const navigate = useNavigate()

  const handleDecrementQuantity = () => {
    decrementQuantity({ quantity: cart!.quantity })
  }

  return (
    <article
      className={classNames(styles.cardProduct, {
        [styles.itemCart]: cart,
      })}
    >
      <div className={styles['cardProduct-image']}>
        <img src={photoUrl} alt={title} />
      </div>

      <div className={styles['cardProduct-description']}>
        <div className={styles['cardProduct-title']}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles['cardProduct-info']}>
          <span className={styles['cardProduct-price']}>
            R$ {price.toFixed(2)}
          </span>

          <div className={styles['cardProduct-actions']}>
            {favorite ? (
              <AiFillHeart
                {...iconItemProps}
                color={COLORS.red[600]}
                className={styles['cardProduct-action']}
                onClick={handleFavorite}
              />
            ) : (
              <AiOutlineHeart
                {...iconItemProps}
                className={styles['cardProduct-action']}
                onClick={handleFavorite}
              />
            )}

            {cart ? (
              <div className={styles.quantity}>
                <span>Quantidade: </span>
                <AiFillMinusCircle
                  {...iconQuantityProps}
                  onClick={handleDecrementQuantity}
                />
                <span>{String(cart!.quantity || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle
                  {...iconQuantityProps}
                  onClick={incrementQuantity}
                />
              </div>
            ) : (
              <FaCartPlus
                {...iconItemProps}
                className={styles['cardProduct-action']}
                color={
                  isCart ? COLORS.azure_radiance[700] : iconItemProps.color
                }
                onClick={handleAddToCart}
              />
            )}
            {!cart && (
              <FiEdit
                className={styles['edit-action']}
                onClick={() => navigate(`item/${id}`)}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
