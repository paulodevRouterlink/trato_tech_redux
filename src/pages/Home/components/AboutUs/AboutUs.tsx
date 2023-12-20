import { DiTechcrunch } from 'react-icons/di'
import { LuBox } from 'react-icons/lu'
import { FiPhoneCall } from 'react-icons/fi'

import styles from './styles.module.scss'
import { AboutItem } from '../AboutItem/AboutItem'

export const AboutUs = () => (
  <section className={styles['about-container']}>
    <div className={styles['about-title']}>
      <h2>Sobre Nós</h2>
      <span>Conheça mais sobre a história do TratoTech</span>
    </div>

    <div className={styles['about-item--wrapper']}>
      <AboutItem
        props={{
          title: 'Large Assortment',
          description: `we offer many different types of products with fewer variations in
            each category.`,
          icon: DiTechcrunch,
        }}
      />

      <AboutItem
        props={{
          title: 'Fast & Free Shipping',
          description: `4-day or less delivery time, free shipping and an expedited delivery option.`,
          icon: LuBox,
        }}
      />

      <AboutItem
        props={{
          title: '24/7 Support',
          description: `answers to any business related inquiry 24/7 and in real-time.`,
          icon: FiPhoneCall,
        }}
      />
    </div>
  </section>
)
