import { HTMLAttributes } from 'react'
import { HeaderProps } from '../HeaderProps'
import styles from './styles.module.scss'

type TitleWithImageProps = HTMLAttributes<HTMLDivElement> & {
  props: HeaderProps
}

export const TitleWithImage = ({ props, ...rest }: TitleWithImageProps) => (
  <div {...rest} className={styles.heading}>
    <div className={styles.heading__text}>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
    <div className={styles.heading__image}>
      <img alt={props.title} src={props.image} />
    </div>
  </div>
)
