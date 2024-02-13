import { ElementType } from 'react'
import styles from './about-item.module.scss'

type AboutItemProps = {
  props: {
    icon: ElementType
    title: string
    description: string
  }
}

export const AboutItem = ({ props }: AboutItemProps) => {
  const { title = '', description = '', icon: Icon } = props

  return (
    <div className={styles['about-item']}>
      <div className={styles['about-item--image']}>
        <Icon />
      </div>

      <div className={styles['about-item--body']}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
