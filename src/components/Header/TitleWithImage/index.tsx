import { HTMLAttributes } from 'react'
import { HeaderProps } from '../HeaderProps'
import styles from './styles.module.scss'

type TitleWithImageProps = HTMLAttributes<HTMLDivElement> & {
  props: HeaderProps
}

export const TitleWithImage = ({ props }: TitleWithImageProps) => (
  <div className={styles.header}>
    <div className={styles.header__text}>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
    <div className={styles.header__image}>
      <img alt={props.title} src={props.image} />
    </div>
  </div>
)
