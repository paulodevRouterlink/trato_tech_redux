import { useNavigate } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from 'react-icons/ai'
import classNames from 'classnames'
import { COLORS } from '@/styles/colors'
import { useCartProduct } from '@/hooks/useCartProduct'
import { ItemProps } from '../../types/items-props'
import styles from './card-product.module.scss'
import { ItemCartProps } from '@/components/types/cart-props'

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
  cart?: ItemCartProps
}

export const CardProduct = ({ card, cart }: CardProductProps) => {
  const { id, title, price, description, photoUrl, favorite } = card
  const navigate = useNavigate()
  const {
    productCart,
    handleDeleteItem,
    handleFavoriteItem,
    handleItemAddToCart,
    incrementQuantityItem,
    decrementQuantityItem,
  } = useCartProduct()

  const isCartItem = productCart.some((itemCart) => itemCart.id === card.id)

  return (
    <article
      className={classNames(styles.cardProduct, {
        [styles.itemCart]: isCartItem,
      })}
    >
      {!isCartItem && (
        <IoClose
          className={classNames(styles['card-product-action'], {
            [styles['card-product-btn--delete']]: true,
          })}
          onClick={() => handleDeleteItem({ id })}
        />
      )}

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
            {isCartItem && (
              <>
                {favorite ? (
                  <AiFillHeart
                    {...iconItemProps}
                    color={COLORS.red[600]}
                    className={styles['cardProduct-action']}
                    onClick={() => handleFavoriteItem({ id })}
                  />
                ) : (
                  <AiOutlineHeart
                    {...iconItemProps}
                    className={styles['cardProduct-action']}
                    onClick={() => handleFavoriteItem({ id })}
                  />
                )}
              </>
            )}

            {isCartItem ? (
              <div className={styles.quantity}>
                <span>Quantidade: </span>
                <AiFillMinusCircle
                  {...iconQuantityProps}
                  onClick={() =>
                    decrementQuantityItem({ id, quantity: cart!.quantity })
                  }
                />
                <span>{String(cart!.quantity || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle
                  {...iconQuantityProps}
                  onClick={() => incrementQuantityItem({ id })}
                />
              </div>
            ) : (
              <FaCartPlus
                {...iconItemProps}
                className={styles['cardProduct-action']}
                color={
                  isCartItem ? COLORS.azure_radiance[700] : iconItemProps.color
                }
                onClick={() => handleItemAddToCart({ id })}
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
