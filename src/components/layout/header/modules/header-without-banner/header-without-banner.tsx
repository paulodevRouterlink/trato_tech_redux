import { HeaderProps } from '../../header-props'
import styles from './header-without-banner.module.scss'

type HeaderWithoutImageProps = {
  props: Omit<HeaderProps, 'imageUrl'>
}

export const HeaderWithoutImage = ({ props }: HeaderWithoutImageProps) => (
  <div className={styles.head}>
    <h1 className={styles.head__title}>{props.title}</h1>
    <h2 className={styles.head__description}>{props.description}</h2>
  </div>
)
