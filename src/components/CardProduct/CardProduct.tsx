import { useDispatch, useSelector } from 'react-redux'
import { FaCartPlus } from 'react-icons/fa'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from 'react-icons/ai'

import { COLORS } from '@/styles/colors'
import { ItemProps } from '@/@types/ItemsProps'
import { changeFavorite } from '@/store/reducers/items'
import { CardProductInfo } from '@/@types/CartProps'
import styles from './styles.module.scss'
import { changeCart } from '@/store/reducers/cart'
import { StateProps } from '@/store'
import classNames from 'classnames'

const iconItemProps = {
  size: 24,
  color: COLORS.midnight[950],
}

const iconQuantityProps = {
  size: 32,
  color: COLORS.azure_radiance[700],
}

type CardProductProps = {
  card: ItemProps & CardProductInfo
}

export const CardProduct = ({ card }: CardProductProps) => {
  const { id, title, price, description, photoUrl, favorite, cart } = card
  const dispatch = useDispatch()

  const isCart = useSelector((state: StateProps) =>
    state.cart.some(item => item.id === id)
  )

  const handleFavorite = () => {
    dispatch(changeFavorite(id))
  }

  const handleAddToCart = () => {
    dispatch(changeCart(id))
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
                Quantidade:
                <AiFillMinusCircle {...iconQuantityProps} />
                <span></span>
                <AiFillPlusCircle {...iconQuantityProps} />
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
          </div>
        </div>
      </div>
    </article>
  )
}
