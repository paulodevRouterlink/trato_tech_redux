import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'

import styles from './styles.module.scss'
import { COLORS } from '@/styles/colors'

const iconItemProps = {
  size: 24,
  color: COLORS.midnight[950],
}

const iconQuantityProps = {
  size: 32,
  color: COLORS.azure_radiance[700],
}

export const Item = () => {
  return (
    <article className={styles.item}>
      <div className={styles['item-image']}>
        <img src="" alt="" />
      </div>

      <div className={styles['item-description']}>
        <div className={styles['item-title']}>
          <h2></h2>
          <p></p>
        </div>

        <div className={styles['item-info']}>
          <span className={styles['item-price']}>R$</span>

          <div className={styles['item-actions']}>
            <AiFillHeart
              {...iconItemProps}
              color={COLORS.red[600]}
              className={styles['item-action']}
            />
            <AiOutlineHeart
              {...iconItemProps}
              className={styles['item-action']}
            />

            <div className={styles.quantity}>
              Quantidade:
              <AiFillMinusCircle {...iconQuantityProps} />
              <span></span>
              <AiFillPlusCircle {...iconQuantityProps} />
            </div>
            <FaCartPlus {...iconItemProps} />
          </div>
        </div>
      </div>
    </article>
  )
}
