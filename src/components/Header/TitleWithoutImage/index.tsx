import { HeaderProps } from '../HeaderProps'
import styles from './styles.module.scss'

type TitleWithoutImageProps = {
  props: Omit<HeaderProps, 'image'>
}

export const TitleWithoutImage = ({ props }: TitleWithoutImageProps) => (
  <div className={styles.head}>
    <h1 className={styles.head__title}>{props.title}</h1>
    <h2 className={styles.head__description}>{props.description}</h2>
  </div>
)
