import { HeaderProps } from '../../header-props'
import styles from './header-without-banner.module.scss'

type HeaderWithoutImageProps = Omit<HeaderProps, 'imageUrl'>

export const HeaderWithoutImage = ({
  title = '',
  description = '',
}: HeaderWithoutImageProps) => (
  <div className={styles.head}>
    <h1 className={styles.head__title}>{title}</h1>
    <h2 className={styles.head__description}>{description}</h2>
  </div>
)
